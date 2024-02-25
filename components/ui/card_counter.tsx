'use client'
import React, { useEffect, useState } from 'react'
import { Card } from './card'
import { LucideIcon } from 'lucide-react'

interface IProp {
    text: string;
    color: 'red' | 'green' | 'yellow' | 'blue';
    number: string;
    Icon: LucideIcon
}

export const CardCounter = ({ color, text, number, Icon }: IProp) => {

    const [colorClass, setcolorClass] = useState('');
    useEffect(() => {

        switch (color) {
            case 'blue':
                setcolorClass('text-blue-800')
                break;
            case 'green':
                setcolorClass('text-green-800')
                break;
            case 'red':
                setcolorClass('text-red-800')
                break;
            case 'yellow':
                setcolorClass('text-yellow-500')
                break;

            default:
                break;
        }

    }, [color])


    return (
        <Card className='w-1/5 h-[100px] flex justify-between p-3 items-center' >
            <div className='flex flex-col justify-around'>
                <span className={`text-[35px] font-bold ${colorClass}`}>{number}</span>
                <span className='text-[12px] font-semibold '>{text}</span>
            </div>
            <div>
                <Icon className={colorClass} size={48} />
            </div>
        </Card>
    )
}
