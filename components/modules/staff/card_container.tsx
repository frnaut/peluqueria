


'use client'
import React from 'react'
import {  Users } from 'lucide-react'
import { CardCounter } from '@/components/ui/card_counter'

export const CardsContainer = () => {
    return (
        <div className='flex'>
            <CardCounter className='mr-5' Icon={Users} color='blue' number='225' text='Staff total' />
            <CardCounter className='mr-5' Icon={Users} color='green' number='100' text='Staff activos' />
            <CardCounter Icon={Users} color='yellow' number='75' text='Staff inactivos' />
           
        </div>
    )
}
