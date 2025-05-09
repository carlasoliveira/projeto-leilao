package com.leilao.backend.model;

import lombok.Data;

@Data
public class PersonUpdateDTO {
    private String email;
    private String password;
    private Integer validationCode;
    
    PersonUpdateDTO(String email, String password, int validationCode){
            this.email = email;
            this.password = password;
            this.validationCode = validationCode;
    }
}
