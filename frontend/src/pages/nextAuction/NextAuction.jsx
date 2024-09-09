import React from "react";
import style from './NextAuction.module.css'
import BasicDemo from "../../components/AuctionsList";
import { Card } from 'primereact/card';

const NextAuction = () => {
    return (
        <>
            <div className={style.nextAuctionContainer}>
                <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <h1>Leilões em andamento</h1>
                <BasicDemo/>
                </Card>
            </div>
        </>
    )
}

export default NextAuction;