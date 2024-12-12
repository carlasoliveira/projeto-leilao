package com.leilao.backend.model;

import lombok.Data;

@Data
public class ConfirmUserDTO {
    private Boolean status;

    public ConfirmUserDTO(Boolean status){
        this.status = status;
    }
}
