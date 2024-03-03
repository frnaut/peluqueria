


'use client'
import React from 'react'
import { SquareUserRound } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex'>
            <CardCounter className='mr-5' Icon={SquareUserRound} color='blue' number='225' text='Usuarios totales' />
            <CardCounter className='mr-5' Icon={SquareUserRound} color='green' number='100' text='Usuarios activos' />
            <CardCounter Icon={SquareUserRound} color='yellow' number='75' text='Usuarios inactivos' />
        </div>
    )
}
