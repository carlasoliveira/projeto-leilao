import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const {t} = useTranslation();
    const labels = {
        vehicles : t('vehicle'),
        computerEquipment : t('computerEquipment'),
        furniture : t('furniture'),
        others : t('others')
    }
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: [labels.vehicles, labels.computerEquipment, labels.furniture, labels.others],
            datasets: [
                {
                    data: [90, 35, 20, 15],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--orange-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--orange-500')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
            animation: 'false',
            animation: {
                duration: 0
            },
            responsiveAnimationDuration: 0,
        };
        
        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
