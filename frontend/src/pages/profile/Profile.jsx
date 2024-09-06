import React from "react";
import style from './Profile.module.css';
import { Image } from "primereact/image";


const Profile = () => {
return(
    <div className={style.profileContainer}>
        <Image src="/images/img-profile.jpg" class=""/>
    </div> //Deve haver apenas 1 bloco de código
);
}

export default Profile;