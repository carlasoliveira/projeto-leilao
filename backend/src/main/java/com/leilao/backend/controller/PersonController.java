package com.leilao.backend.controller;

import java.net.URI;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.leilao.backend.model.ConfirmUserDTO;
import com.leilao.backend.model.Person;
import com.leilao.backend.model.PersonAuthRequestDTO;
import com.leilao.backend.model.PersonUpdateDTO;
import com.leilao.backend.repository.PersonRepository;
import com.leilao.backend.security.JwtService;
import com.leilao.backend.service.PersonService;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/person")
@CrossOrigin
public class PersonController {
    @Autowired
    private PersonService personService;

    @Autowired 
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping
    public Person create(@Valid @RequestBody Person person){
        return personService.create(person);
    }

    // localhost:8080/api/profile/10
    @DeleteMapping("/{id}") //Para capturar o ID
    public void delete(@PathVariable("id") Long id) {
        personService.delete(id);
    }

    @PostMapping("/login")
    public String authenticateUser(@RequestBody PersonAuthRequestDTO authRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        return jwtService.generateToken(authentication.getName());
    }

    @PostMapping("/password-code-request")
    public String passwordCodeRequest(@RequestBody Map<String, String> person) throws MessagingException{
        System.err.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+person.get("email"));
        return personService.passwordCodeRequest(person.get("email"));
    }

    @PutMapping("/change-password")
    public String changePassword(@RequestBody PersonUpdateDTO person) throws MessagingException{
        return personService.changePassword(person);
    }

    @GetMapping("/validate-user")
    public String validateUser(@RequestBody Map<String, String> person) throws MessagingException{
        return personService.confirmUser(person.get("email"));
    }

}
/*try {
            boolean isValid = personService.confirmUser(email);
            if (isValid) {
                // Redirect to the success page
                return ResponseEntity.status(HttpStatus.OK).location(URI.create("http://localhost:8080/api/person/login")).build();
            } else {
                // Redirect to the failure page
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .location(URI.create("http://localhost:8080/api/person/err"))
                        .build();
            }
        } catch (UsernameNotFoundException ex) {
            // Redirect to the failure page if email is not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).location(URI.create("http://localhost:8080/api/person/err")).build();
        }*/