
import { CardsContainer } from '@/components/dashboard/cards_container'
import { CustomBarChart } from '@/components/dashboard/charts/bar_chart'
import { TopServicesTable } from '@/components/dashboard/tables/top_services_table'
import { TopStaffTable } from '@/components/dashboard/tables/top_staff_table'
import { Card } from '@/components/ui/card'
import React from 'react'

export default function Page() {

    return (
        <div className='p-5'>
            <CardsContainer />
            <div className='flex mt-5'>
                <div className='w-4/6 mr-5'>
                    <Card className='p-5'>
                        <CustomBarChart />
                    </Card>
                    <Card className='mt-5'>
                        <TopStaffTable />
                    </Card>
                </div>
                <div className='w-2/6'>
                    <Card className=''>
                        <h2 className='font-bold text-center mt-2'>Servicios más solicitados</h2>
                        <TopServicesTable />
                    </Card>
                </div>
            </div>
        </div>
    )
}
