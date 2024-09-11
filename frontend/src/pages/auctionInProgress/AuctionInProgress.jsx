import React from "react";
import style from './AuctionInProgress.module.css'
import BasicDemo from "../../components/AuctionsList";
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';
const AuctionInProgress = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className={style.inProgressContainer}>
                <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <h1>{t('auctionsInProgress')}</h1>
                <BasicDemo/>
                </Card>
            </div>
        </>
    )
}

export default AuctionInProgress;