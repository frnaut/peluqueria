


'use client'
import React from 'react'
import { Building } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex'>
            <CardCounter className='mr-5' Icon={Building} color='blue' number='225' text='Sucursales total' />
            <CardCounter className='mr-5' Icon={Building} color='green' number='100' text='Sucursales activas' />
            <CardCounter Icon={Building} color='red' number='50' text='Sucursales inactivas' />
        </div>
    )
}
