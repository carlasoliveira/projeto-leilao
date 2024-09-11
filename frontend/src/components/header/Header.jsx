import React from "react";
import './Header.css';
import Logout from "../../components/logout/logout";
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const labels = {
        home : t('home'),
        auctions : t('auctions'),
        inProgress : t('auctionsInProgress'),
        next : t('auctionsNext'),
        finished : t('auctionsFinished'),
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const start = <img alt="logo" src="/images/img-navbar.png" height="40" className="mr-2"></img>;
    const items = [
        {
            label: labels.home,
            icon: 'pi pi-home',
            url: '/',
        },
        {
            label: labels.auctions,
            icon: 'pi pi-hammer',
            items: [
                {
                    label: labels.inProgress,
                    icon: 'pi pi-clock',
                    url: '/auction-in-progress',
                },
                {
                    label: labels.next,
                    icon: 'pi pi-spinner-dotted',
                    url: './next-auction',
                },
                {
                    label: labels.finished,
                    icon: 'pi pi-check-circle',
                    url: './finished-auction',
                }
            ]
        }
    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <Button onClick={() => changeLanguage('en')} className="p-button-text">{t('english')}</Button>
            <Button onClick={() => changeLanguage('pt')} className="p-button-text">{t('portuguese')}</Button>
            <Avatar image="/images/img-profile.jpg" shape="circle" onClick={() => window.location.href = "./profile"} />
            <Logout />
        </div>
    );

    return (
        <div className="header">
            <Menubar model={items} start={start} end={end} />
        </div> //Deve haver apenas 1 bloco de código
    );

}

export default Header;