import React from "react";
import style from './Home.module.css';
import { Card } from 'primereact/card';
import BasicDemo from "../../components/ItemsList";
import DoughnutChartDemo from "../../components/Chart";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className={style.homeContainer}>
            <Card className="card md:w-60rem h-65rem lg:w-60rem h-65rem">
                <h1>{t('portal')}</h1>
                <div class="grid nested-grid">
                    <div class="grid">
                        <div class="col-6">
                            <div class="text-center p-3 border-round-sm">
                                <h2>{t('activeAuctions')}</h2>
                                <h3>3</h3>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center p-3 border-round-sm">
                                <h2>{t('salesAuctions')}</h2>
                                <h3>165</h3>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="text-justify p-4 border-round-sm">
                                <h2>{t('lastItems')}</h2>
                                <BasicDemo />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="text-justify p-4 border-round-sm">
                                <h2>{t('bestCategories')}</h2>
                                <DoughnutChartDemo />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div> //Deve haver apenas 1 bloco de código
    );
}

export default Home;