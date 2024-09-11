import React from "react";
import style from './ChangePassword.module.css';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';

const ChangePassword = () => {
    const { t } = useTranslation();
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    return (
        <div className={style.changeContainer}>
            <Card title={t('changePassword')} className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div class="field" className={style.field}>
                    <label htmlFor="email">{t('email')}</label><br />
                    <InputText placeholder={t('email')} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="code">{t('code')}</label><br />
                    <InputText placeholder={t('code')} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="new-password">{t('newPassword')}</label><br />
                    <Password value={password} feedback={false} placeholder={t('newPassword')} onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="confirm-new-password">{t('confirmPassword')}</label><br />
                    <Password value={passwordAgain} feedback={false} placeholder={t('confirmPassword')} onChange={e => setPasswordAgain(e.target.value)} />
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
                    <Button label={t('changePassword')} className={style.button} raised link onClick={() => window.location.href = "./"}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label={t('button.cancel')} link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
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