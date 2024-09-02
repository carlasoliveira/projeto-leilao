import React from "react";
import './Register.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
//import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Register = () => {

    const header = (
        <img alt="Card" src="/images/img-login.png" />
    );
    
    return (
        <div className="register-container">
            <Card title="Novo cadastro" className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem" header={header}>
                <div class="field">
                    <label htmlFor="name">Nome completo</label><br />
                    <InputText placeholder="Nome" />
                </div>
                <div class="field">
                    <label htmlFor="email">E-mail</label><br />
                    <InputText placeholder="E-mail" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Cadastrar" className="button" raised link onClick={() => window.location.href = "./"}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Register;