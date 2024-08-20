import React, { useState } from "react";
import './Login.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({ email: "", password: ""});

    const navigate = useNavigate();

    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value});
    }

    const login = () => {
        if (user.email == "carla@gmail.com" && user.password == "123") {
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            localStorage.setItem("password", user.password);
            navigate('/');
        } else {
            alert("Usuário ou senha inseridos estão incorretos");
        }
    }

    return (
        <div className="login-container">
            <Card title="Login" className="card">
                <div class="field">
                    <InputText onChange={handleChange} name="email" id="email" placeholder="E-mail" />
                </div>
                <div class="field">
                    <Password onChange={handleChange} name="password" id="password" feedback={false} placeholder="Senha" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Entrar" onClick={login} className="button" raised></Button>
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