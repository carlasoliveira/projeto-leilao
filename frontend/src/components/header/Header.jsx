import React from "react";
import './Header.css';
import Logout from "../../components/logout/logout";
import { Menubar } from 'primereact/menubar';

const Header = () => {
    const start = <img alt="logo" src="/images/img-navbar.png" height="40" className="mr-2"></img>;
    const items = [
        {
            label: 'Início',
            icon: 'pi pi-home',
        },
        {
            label: 'Leilões',
            icon: 'pi pi-hammer',
            items: [
                {
                    label: 'Em andamento',
                    icon: 'pi pi-clock',
                    url: './auctionInProgress',
                },
                {
                    label: 'Próximos',
                    icon: 'pi pi-spinner-dotted',
                    url: './nextAuction',
                },
                {
                    label: 'Encerrados',
                    icon: 'pi pi-check-circle',
                    url: './AuctionFinished',
                }
            ]
        }
    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <Logout/>
        </div>
    );
    
    return (
        <div className="header">
            <Menubar model={items} start={start} end={end}/>
            
            <h1>Leilões Administrativos</h1>
        </div> //Deve haver apenas 1 bloco de código
    );

}

export default Header;