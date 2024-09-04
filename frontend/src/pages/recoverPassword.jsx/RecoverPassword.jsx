import React from "react";
import style from './RecoverPassword.module.css'

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const RecoverPassword = () => {
    return (
        <div className={style.recoverContainer}>
            <Card title="Recuperar senha" className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div class="field" className={style.field}>
                    <label htmlFor="email">E-mail</label><br />
                    <InputText placeholder="E-mail" />
                </div>
                <div class="flex justify-content-center">
                    <Button label="Recuperar senha" className={style.button}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label="Cancelar" link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default RecoverPassword;