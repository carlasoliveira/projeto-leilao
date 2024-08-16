import React from "react";
import './Register.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Register = () => {
    return (
        <div className="register-container">
            <Card title="Novo cadastro" className="card">
                <div class="field">
                    <InputText placeholder="Nome" />
                </div>
                <div class="field">
                    <InputText placeholder="E-mail" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Cadastrar" className="button"></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Register;