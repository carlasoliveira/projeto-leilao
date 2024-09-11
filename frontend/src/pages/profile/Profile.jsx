import React, { useEffect, useState, useRef } from 'react';
import style from './Profile.module.css';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    
    const [user, setUser] = useState({
        name: '',
        rg: '',
        cpf: '',
        city: '',
        country: '',
        phone: '',
        email: ''
    });

    const {t} = useTranslation();

    const [visible, setVisible] = useState(false);

    const nameRef = useRef(null);
    const rgRef = useRef(null);
    const cpfRef = useRef(null);
    const cityRef = useRef(null);
    const countryRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUser(JSON.parse(storedUserData));
        } else {
            const fetchUserData = async () => {
                try {
                    const response = await fetch('/archives/userData.json');
                    const data = await response.json();
                    setUser(data);
                } catch (error) {
                    console.error('Erro ao buscar dados do usuário:', error);
                }
            };
            fetchUserData();
        }
    }, []);

    const saveChanges = () => {
        
        const updatedUser = {
            name: nameRef.current.value,
            rg: rgRef.current.value,
            cpf: cpfRef.current.value,
            city: cityRef.current.value,
            country: countryRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value
        };

        setUser(updatedUser);
        setVisible(false);

        localStorage.setItem('userData', JSON.stringify(updatedUser));
    };



    const footerContent = (
        <div>
            <Button label={t('button.cancel')}icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label={t('button.confirm')} icon="pi pi-check" onClick={saveChanges} autoFocus />
        </div>
    );

    return (
        <div className={style.profileContainer}>
            <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <div class='grid'>
                    <div class='col-12 flex justify-content-center'>
                        <Image src='/images/img-profile.jpg' imageClassName={style.profilePic} />
                    </div>
                    <div class='col-12'>
                        <div class='grid'>
                            <div class='col'>
                                <div className={style.dataContainer}>
                                    <h1>{t('personalData')}</h1>
                                    <h2>{t('name')}: {user.name}</h2>
                                    <h2>{t('rg')}: {user.rg}</h2>
                                    <h2>{t('cpf')}: {user.cpf}</h2>
                                </div>
                            </div>
                            <div class='col'>
                                <div className={style.dataContainer}>
                                    <h1>{t('address')}</h1>
                                    <h2>{t('city')}: {user.city}</h2>
                                    <h2>{t('country')}: {user.country}</h2>
                                    <h2>{t('phone')}: {user.phone}</h2>
                                    <h2>{t('email')}: {user.email}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className={style.button} label={t('button.edit')} icon="pi pi-pen-to-square" onClick={() => setVisible(true)}></Button>
                    <Dialog header={t('editInfos')} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                        <div className='grid'>
                            <div className='col'>
                            <label htmlFor="name">{t('fullName')}</label><br />  
                                <InputText className={style.field} defaultValue={user.name} ref={nameRef} placeholder={t('fullName')} />
                                <label htmlFor="rg">{t('rg')}</label><br />
                                <InputText className={style.field} defaultValue={user.rg} ref={rgRef} placeholder={t('rg')} />
                                <label htmlFor="cpf">{t('cpf')}</label><br />
                                <InputText className={style.field} defaultValue={user.cpf} ref={cpfRef} placeholder={t('cpf')} />
                            </div>
                            <div className='col'>
                                <label htmlFor="city">{t('city')}</label><br />
                                <InputText className={style.field} defaultValue={user.city} ref={cityRef} placeholder={t('city')} />
                                <label htmlFor="country">{t('country')}</label><br />
                                <InputText className={style.field} defaultValue={user.country} ref={countryRef} placeholder={t('country')} />
                                <label htmlFor="phone">{t('phone')}</label><br />
                                <InputText className={style.field} defaultValue={user.phone} ref={phoneRef} placeholder={t('phone')} />
                                <label htmlFor="email">{t('email')}</label><br />
                                <InputText className={style.field} defaultValue={user.email} ref={emailRef} placeholder={t('email')} />
                            </div>
                        </div>
                    </Dialog>
                </div>
            </Card>


        </div> //Deve haver apenas 1 bloco de código
    );
}

export default Profile;