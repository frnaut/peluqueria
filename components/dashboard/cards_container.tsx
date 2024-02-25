
'use client'
import React from 'react'
import { CardCounter } from '../ui/card_counter'
import { CalendarDays } from 'lucide-react'

export const CardsContainer = () => {
    return (
        <div className='flex justify-between'>
            <CardCounter Icon={CalendarDays} color='blue' number='225' text='Citas total' />
            <CardCounter Icon={CalendarDays} color='green' number='100' text='Citas activas' />
            <CardCounter Icon={CalendarDays} color='yellow' number='75' text='Citas pendientes' />
            <CardCounter Icon={CalendarDays} color='red' number='50' text='Citas canceladas' />
        </div>
    )
}
