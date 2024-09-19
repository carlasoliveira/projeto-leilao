import React, { useState } from "react";
import style from './ChangePassword.module.css';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

const ChangePassword = () => {
    const { t } = useTranslation();
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const header = <div className="font-bold mb-3">Insira a sua senha:</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Insira pelo menos</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Oito caracteres</li>
                <li>Uma letra maiúscula</li>
                <li>Uma letra minúscula</li>
                <li>Um caractere numérico</li>
            </ul>
        </>
    );

    const validatePasswords = () => {
        if (password == passwordAgain) {
            setPasswordError("");
        } else {
            setPasswordError("As senhas não coincidem");
        }
    };

    return (
        <div className={style.changeContainer}>
            <Card title={t('changePassword')} className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div className={style.field}>
                    <label htmlFor="email">{t('email')}</label><br />
                    <InputText placeholder={t('email')} />
                </div>
                <div className={style.field}>
                    <label htmlFor="code">{t('code')}</label><br />
                    <InputText placeholder={t('code')} />
                </div>
                <div className={style.field}>
                    <label htmlFor="new-password">{t('newPassword')}</label><br />
                    <Password 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        header={header} 
                        footer={footer} 
                        promptLabel="Insira a senha" 
                        weakLabel="Fraca" 
                        mediumLabel="Média" 
                        strongLabel="Forte" 
                        toggleMask 
                        placeholder="Nova senha"
                    />
                </div>
                <div className={style.field}>
                    <label htmlFor="confirm-password">{t('confirmPassword')}</label><br />
                    <Password 
                        value={passwordAgain} 
                        onChange={(e) => {
                            setPasswordAgain(e.target.value);
                            validatePasswords();
                        }} 
                        className={passwordError} 
                        toggleMask
                        placeholder="Confirme a nova senha"
                    /> <p></p>
                    {passwordError && <small className="p-error">{passwordError}</small>}
                </div>
                <Button label="Salvar" icon="pi pi-check" onClick={() => validatePasswords()} />
            </Card>
        </div>
    );
}

export default ChangePassword;