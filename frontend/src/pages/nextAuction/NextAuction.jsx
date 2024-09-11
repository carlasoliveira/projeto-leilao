import React from "react";
import style from './NextAuction.module.css'
import BasicDemo from "../../components/AuctionsList";
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

const NextAuction = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className={style.nextAuctionContainer}>
                <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <h1>{t('auctionsNext')}</h1>
                <BasicDemo/>
                </Card>
            </div>
        </>
    )
}

export default NextAuction;