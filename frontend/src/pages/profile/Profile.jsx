import React, { useEffect, useState } from 'react';
import style from './Profile.module.css';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Profile = () => {
   
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
                                    <h2>Nome: Carlo Acutis</h2>
                                    <h2>Idade: 15 anos</h2>
                                    <h2>RG: </h2>
                                    <h2>CPF: </h2>
                                </div>
                            </div>
                            <div class='col'>
                                <div className={style.dataContainer}>                                    
                                    <h1>Endereço e contato</h1>
                                    <h2>Cidade: Londres</h2>
                                    <h2>País: Inglaterra</h2>
                                    <h2>Telefone: (44)99999-9999</h2>
                                    <h2>Email: carloacutis@gmail.com</h2>
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