


'use client'
import React from 'react'
import { CalendarDays } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex justify-between'>
            <CardCounter Icon={CalendarDays} color='blue' number='225' text='Citas total hoy' />
            <CardCounter Icon={CalendarDays} color='green' number='100' text='Citas activas hoy' />
            <CardCounter Icon={CalendarDays} color='yellow' number='75' text='Citas pendientes hoy' />
            <CardCounter Icon={CalendarDays} color='red' number='50' text='Citas canceladas hoy' />
        </div>
    )
}
