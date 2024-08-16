import React from "react";
import './RecoverPassword.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const RecoverPassword = () => {
    return (
        <div className="recover-container">
            <Card title="Recuperar senha" className="card">
                <div class="field">
                    <InputText placeholder="E-mail" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Recuperar senha" className="button"></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default RecoverPassword;