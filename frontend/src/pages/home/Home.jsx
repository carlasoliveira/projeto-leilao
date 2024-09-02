import React from "react";
import './Home.css';
import Logout from "../../components/logout/logout";
import { Menubar } from 'primereact/menubar';
import { useTranslation } from "react-i18next";

const Home = () => {
    const {t, i18n} = useTranslation();
    
return(
    <div>
        <Logout/>
    </div> //Deve haver apenas 1 bloco de código
);
}

export default Home;