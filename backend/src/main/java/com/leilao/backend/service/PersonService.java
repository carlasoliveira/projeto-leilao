package com.leilao.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Random;

import com.leilao.backend.model.Person;
import com.leilao.backend.model.PersonAuthRequestDTO;
import com.leilao.backend.model.PersonAuthResponseDTO;
import com.leilao.backend.model.PersonUpdateDTO;
import com.leilao.backend.repository.PersonRepository;

import jakarta.mail.MessagingException;

@Service
public class PersonService implements UserDetailsService {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private EmailService emailService;

    public Person create(Person person) {
        Person personSaved = personRepository.save(person);
        Context context = new Context(); // Classe do Spring para manipular o contexto da aplicação
        context.setVariable("name", personSaved.getName()); // Adiciona uma variável ao contexto
        try {
            emailService.sendTemplateEmail(personSaved.getEmail(), "Cadastro realizado com sucesso", context,
                    "emailWelcome");
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return personSaved;
    }

    public void delete(Long id) {
        Person personSaved = personRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));
        personRepository.delete(personSaved);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return personRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public String passwordCodeRequest(PersonAuthRequestDTO personPasswordRequestDTO) throws MessagingException {
        Optional<Person> person = personRepository.findByEmail(personPasswordRequestDTO.getEmail());
        if (person != null) {
            Person personDatabase = person.get();
            Random random = new Random();
            int validationCode = 100000 + random.nextInt(900000);
            String formattedValidationCode = String.format("%6d", validationCode);
            personDatabase.setValidationCode(validationCode);
            LocalDateTime validity = LocalDateTime.now().plusMinutes(15);
            personDatabase.setValidationCodeValidity(validity);
            personRepository.save(personDatabase);
            emailService.sendSimpleEmail(
                    personDatabase.getEmail(),
                    "Solicitação para recuperação de senha",
                    "Olá, " + personDatabase.getName() +
                            ".\n\nSeu código de validação para recuperação de senha é: " + formattedValidationCode +
                            "\n\nEste código é válido até "
                            + validity.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) + ".");
        }

        return "Sucesso! Código enviado com sucesso";
    }

    public String changePassword(PersonUpdateDTO personUpdateDTO) throws MessagingException {
        Optional<Person> person = personRepository.findByEmailAndValidationCode(personUpdateDTO.getEmail(),
                personUpdateDTO.getValidationCode());
        if (person != null) {
            Person personDatabase = person.get();
            if (personDatabase.getValidationCodeValidity().isBefore(LocalDateTime.now())) {
                return "Código de validação expirado";
            }
            personDatabase.setPassword(personUpdateDTO.getPassword());
            personDatabase.setValidationCode(null);
            personDatabase.setValidationCodeValidity(null);
            personRepository.save(personDatabase);
            return "Senha alterada com sucesso";
        } else {
            return "Usuário não cadastrado";
        }
    }

    public String confirmUser(Integer tokenValidation) {
        Optional<Person> person = personRepository.findByValidationCode(tokenValidation);
        Person personDatabase = person.get();
        
        personDatabase.setValidationCode(tokenValidation);
        personRepository.save(personDatabase);
        return "aa";
    }

}
