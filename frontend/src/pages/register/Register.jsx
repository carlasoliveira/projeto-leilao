import React, {useState} from "react";
import style from './Register.module.css';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import PersonService from "../../service/PersonService";

const Register = () => {

    const [user, setUser] = useState({ name:"", email: "", password: "" });
    const { t } = useTranslation();
    const navigate = useNavigate();
    const personService = new PersonService();
    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value });
    }

    const register = async () => {
        try {
            
            const response = await personService.insert(user);
            console.log(response)
            let token = response.token;
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            localStorage.setItem("password", user.password);
            window.location.href = "./register-confirm";
        } catch (err){
            console.log(err);
            alert("Insira todas as informações corretamente!");
        }
    }

    return (
        <div className={style.registerContainer}>
            <Card title={t('newAccount')}className="card md:w-25rem h-95rem lg:w-25rem h-95rem sm:w-25rem h-95rem">
                <div class="field" className={style.field}>
                    <label htmlFor="name">{t('fullName')}</label><br />
                    <InputText onChange={handleChange} name="name" id="namae" placeholder={t('fullName')} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="email">{t('email')}</label><br />
                    <InputText onChange={handleChange} name="email" id="email" placeholder={t('email')} />
                </div>
                <div class="field" className={style.field}>
                    <label htmlFor="password">{t('password')}</label><br />
                    <Password onChange={handleChange} name="password" id="password" feedback={false} placeholder={t('password')} />
                </div>
                <div class="flex justify-content-center">
                    <Button label={t('button.register')} className={style.button} raised link onClick={register}></Button>
                </div>
                <div class="flex justify-content-center grid mt-1">
                    <Button label={t('button.cancel')}link onClick={() => window.location.href = "./login"} size="small" severity="danger" text></Button>
                </div>
            </Card>
        </div>
    );
}

export default Register;