import React, {useState} from "react";
import style from './RecoverPassword.module.css'
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import PersonService from "../../service/PersonService";

const RecoverPassword = () => {
    const [email, setEmail] =  useState("");
    const {t} = useTranslation();
    const navigate = useNavigate();
    const personService = new PersonService;
    const handleChange = (input) => {
        setEmail({ ...email, ["email"]: input.target.value });
    }

    const recover = async () => {
        console.log(email);
        try {
            await personService.codeRecover(email);
            navigate('/recover-confirm');
        } catch (err) {
            console.log(err);
            alert("Verifique o e-mail inserido!");
        }
    }

    return (
        <div className={style.recoverContainer}>
            <Card title={t('recoverPassword')}className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div class="field" className={style.field}>
                    <label htmlFor="email">{t('email')}</label><br />
                    <InputText onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                </div>
                <div class="flex justify-content-center">
                    <Button label={t('recoverPassword')} onClick={recover} className={style.button}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label={t('button.cancel')} link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default RecoverPassword;