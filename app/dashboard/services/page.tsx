
import { CardsContainer } from '@/components/modules/services/card_container'
import { TableContainer } from '@/components/modules/services/table_container'
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