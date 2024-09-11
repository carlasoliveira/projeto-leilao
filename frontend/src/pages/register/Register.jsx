import React from "react";
import style from './Register.module.css';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
//import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
    return (
        <div className={style.registerContainer}>
            <Card title={t('newAccount')}className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div class="field" className={style.field}>
                    <label htmlFor="name">{t('fullName')}</label><br />
                    <InputText placeholder={t('fullName')} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="email">{t('email')}</label><br />
                    <InputText placeholder={t('email')} />
                </div>
                <div class="flex justify-content-center">
                    <Button label={t('button.register')} className={style.button} raised link onClick={() => window.location.href = "./"}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label={t('button.cancel')}link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Register;