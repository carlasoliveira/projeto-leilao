import React from "react";
import './Header.css';
import { Menubar } from 'primereact/menubar';
import { useRef } from 'react';

const Header = () => {
    const start = <img alt="logo" src="/images/img-navbar.png" height="40" className="mr-2"></img>;
    const items = [
        {
            label: 'Início',
            icon: 'pi pi-file',
        },
        {
            label: 'Leilões',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Em andamento',
                    icon: 'pi pi-clock',
                    url: '',
                },
                {
                    label: 'Próximos',
                    icon: 'pi pi-check-circle',
                    url: '',
                },
                {
                    label: 'Encerrados',
                    icon: 'pi pi-hammer',
                    url: '',
                }
            ]
        }
    ];

    return (
        <div className="header">
            <Menubar model={items} start={start} />
            
        </div> //Deve haver apenas 1 bloco de código
    );
}

export default Header;