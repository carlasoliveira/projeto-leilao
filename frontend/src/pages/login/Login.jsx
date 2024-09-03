import React, { useState } from "react";
import style from './Login.module.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value });
    }

    const header = (
        <img alt="Card" src="/images/img-login.png" />
    );

    const login = () => {
        if (user.email == "admin" && user.password == "admin") {
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
        <div className={style.loginContainer}>
            <Card title="Login" className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem" header={header}>
                <div class="field" className={style.field}>
                    <label htmlFor="email">E-mail</label><br />
                    <InputText onChange={handleChange} name="email" id="email" placeholder="E-mail" />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="password">Senha</label><br />
                    <Password onChange={handleChange} name="password" id="password" feedback={false} placeholder="Senha" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Entrar" onClick={login} className={style.button} raised></Button>
                </div>
                <div class="flex justify-content-center grid mt-2">
                    <Button label="Novo cadastro" link onClick={() => window.location.href = "./register"} size="small" severity="primary" text></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Esqueci minha senha" link onClick={() => window.location.href = "./recover-password"} size="small" severity="primary" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Login;