import React, { useState } from "react";
import style from './RecoverMessage.module.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const RecoverMessage = () => {

    const { t } = useTranslation();

    return (
        <div className={style.registerContainer}>
            <Card title={t('Recuperação solicitada com sucesso')} className="card md:w-25rem h-95rem lg:w-50rem h-125rem sm:w-25rem h-95rem">
                <p>{t('confirmMessageText')}</p>
                <Button label="Prosseguir" link onClick={() => window.location.href = "./change-password"} size="small" rounded></Button>
            </Card>
        </div>
    );
}

export default RecoverMessage;