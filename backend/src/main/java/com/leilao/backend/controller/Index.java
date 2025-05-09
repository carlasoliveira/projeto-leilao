package com.leilao.backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // define que a classe é um controlador REST
@RequestMapping("/index") // define a rota padrão para acessar os métodos da classe
public class Index {
    @GetMapping //método que será chamado quando acessar a URL -- 
    //  Sem especificar a rota padrão, a URL seria http://localhost:8080/index
    public String index() {
        return "Hello World! Louvado seja Nosso Senhor Jesus Cristo!";
    }    
    // Não pode haver dois métodos com a mesma rota, pois o Spring não saberia qual método chamar
    // Para testar o método abaixo, acesse http://localhost:8080/index/save via POST
    @PostMapping //método que será chamado via requisição POST
    public String save() {
        return "Success!";
    }
}
