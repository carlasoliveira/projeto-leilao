package com.leilao.backend.model;

import lombok.Data;

@Data
public class PersonPasswordRequestDTO {
    private String password;
    private String validationCode;
}
