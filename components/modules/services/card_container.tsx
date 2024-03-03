


'use client'
import React from 'react'
import {  GanttChartSquare } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex'>
            <CardCounter className='mr-5' Icon={GanttChartSquare} color='blue' number='225' text='Servicios totales' />
            <CardCounter className='mr-5' Icon={GanttChartSquare} color='green' number='100' text='Servicios activos' />
            <CardCounter Icon={GanttChartSquare} color='yellow' number='75' text='Servicios inactivos' />
        </div>
    )
}
