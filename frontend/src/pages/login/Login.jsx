import React from "react";
import './Login.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {
    return (
        <div className="login-container">
            <Card title="Login" className="card">
                <div class="field">
                    <InputText placeholder="E-mail"/>
                </div>
                <div class="field">
                    <Password feedback={false} placeholder="Senha"/>
                </div>
                <div class="flex justify-content-center">
                    <Button label="Entrar" className="button"></Button>
                </div>
                <div class="flex justify-content-center grid mt-2">
                    <Button label="Novo cadastro" link onClick={() => window.location.href = "./register"} size="small" severity="primary" text></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Esqueci minha senha" link onClick={() => window.location.href = "./recover-password"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Login;