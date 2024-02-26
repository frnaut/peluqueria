'use client'
import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
        {
            label: 'Citas por mes',
            data: [50, 60, 70, 45, 85, 60, 50, 60, 70, 45, 85, 60],
            backgroundColor: ['#7c3aed', '#7c3aed98'],
            borderColor: '#7c3aed',
            borderWidth: 0,
        },
    ],
};




const options: any = {
    type: "bar",
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const CustomBarChart = () => {
    return (
        <div className='w-full'>
            <Bar data={data} options={options} />
        </div>
    )
}
