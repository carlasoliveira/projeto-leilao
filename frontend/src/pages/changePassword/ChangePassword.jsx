import React from "react";
import './ChangePassword.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

const ChangePassword = () => {
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
                    <Password feedback={false} placeholder="Nova senha"/>
                </div>
                <div class="field">
                    <Password feedback={false} placeholder="Confirmar senha"/>
                </div>
                <div class="flex justify-content-center">
                    <Button label="Alterar senha" className="button"></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default ChangePassword;