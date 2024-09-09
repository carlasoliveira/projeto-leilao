import React from "react";
import style from './AuctionInProgress.module.css'
import BasicDemo from "../../components/ItemsList";
import { Card } from 'primereact/card';
const AuctionInProgress = () => {
    return (
        <>
            <div className={style.inProgressContainer}>
                <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <h1>Leilões em andamento</h1>
                <BasicDemo/>
                </Card>
            </div>
        </>
    )
}

export default AuctionInProgress;