import { CardsContainer } from '@/components/dashboard/cards_container'
import { CustomBarChart } from '@/components/dashboard/charts/bar_chart'
import React from 'react'

export default function Page() {
    return (
        <div className='p-5'>
            <CardsContainer />
            <div>
                <div className='w-4/6 p-5'>
                    <CustomBarChart />
                </div>
                <div className='w-2/6'></div>
            </div>
        </div>
    )
}
