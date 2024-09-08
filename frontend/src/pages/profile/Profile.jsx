import React, { useEffect, useState } from 'react';
import style from './Profile.module.css';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Profile = () => {
    // Estado para armazenar os dados do usuário
    const [user, setUser] = useState({
        name: '',
        age: '',
        rg: '',
        cpf: '',
        city: '',
        country: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
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
    }, []);
   
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
                                    <h1>Dados Pessoais</h1>
                                    <h2>Nome: {user.name}</h2>
                                    <h2>Idade: {user.age}</h2>
                                    <h2>RG: {user.rg}</h2>
                                    <h2>CPF: {user.cpf}</h2>
                                </div>
                            </div>
                            <div class='col'>
                                <div className={style.dataContainer}>                                    
                                    <h1>Endereço e contato</h1>
                                    <h2>Cidade: {user.city}</h2>
                                    <h2>País: {user.country}</h2>
                                    <h2>Telefone: {user.phone}</h2>
                                    <h2>Email: {user.email}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className={style.button} label="Editar" icon="pi pi-pen-to-square"></Button>
                </div>
            </Card>


        </div> //Deve haver apenas 1 bloco de código
    );
}

export default Profile;