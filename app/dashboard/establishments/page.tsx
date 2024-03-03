
import { CardsContainer } from '@/components/modules/establishments/card_container'
import { TableContainer } from '@/components/modules/establishments/table_container'
import React from 'react'




const Page = () => {
    return (
        <div className='p-5'>
            <div>
                <CardsContainer />
            </div>
            <div className='mt-5'>
                <TableContainer />
            </div>
        </div>
    )
}

export default Page