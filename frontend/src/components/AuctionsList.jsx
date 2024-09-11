import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { AuctionService } from '../services/auctions';

export default function BasicDemo() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        AuctionService.getAuctionsSmall().then((data) => setAuctions(data.slice(0, 5)));
    }, []);

    const itemTemplate = (auction, index) => {
        return (
            <div className="col-12" key={auction.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`/images/img-login.png`} alt={auction.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{auction.name}</div>
                            <div className="text-2xl text-500">{auction.description}</div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Button icon="pi pi-plus" className="p-button-rounded"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((auction, index) => {
            return itemTemplate(auction, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <div className="card">
            <DataView value={auctions} listTemplate={listTemplate} />
        </div>
    )
}
        