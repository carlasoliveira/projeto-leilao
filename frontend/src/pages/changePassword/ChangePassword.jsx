import React from "react";
import './ChangePassword.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    return (
        <div className="change-container">
            <Card title="Alterar senha" className="card">
                <div class="field">
                    <InputText placeholder="E-mail" />
                </div>
                <div class="field">
                    <InputText placeholder="Código" />
                </div>
                <div class="field">
                    <Password value={password} feedback={false} placeholder="Nova senha" onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="field">
                    <Password value={passwordAgain} feedback={false} placeholder="Confirmar senha" onChange={e => setPasswordAgain(e.target.value)} />
                </div>
                <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                    minLength={6}
                    value={password}
                    valueAgain={passwordAgain}
                    onChange={(isValid) => { }}
                    messages={{
                        minLength: "A senha possui no mínimo 6 caracteres.",
                        specialChar: "A senha contém pelo menos 1 caractere especial.",
                        number: "A senha contém pelo menos 1 número.",
                        capital: "A senha contém pelo menos 1 letra maiúscula.",
                        match: "As senhas são iguais.",
                    }} />
                <div class="flex justify-content-center grid mt-2">
                    <Button label="Alterar senha" className="button" raised link onClick={() => window.location.href = "./"}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>

        /*const validationPassword = (password) => {
            return (

            )
        }*/
    );
}

export default ChangePassword;