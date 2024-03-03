


'use client'
import React from 'react'
import { Receipt } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex'>
            <CardCounter className='mr-5' Icon={Receipt} color='blue' number='225' text='Ordenes total hoy' />
            <CardCounter className='mr-5' Icon={Receipt} color='green' number='100' text='Ordenes completadas hoy' />
            <CardCounter Icon={Receipt} color='red' number='50' text='Citas canceladas hoy' />
        </div>
    )
}
