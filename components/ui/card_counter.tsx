'use client'
import React, { useEffect, useState } from 'react'
import { Card } from './card'
import { LucideIcon } from 'lucide-react'

interface IProp {
    text: string;
    color: 'red' | 'green' | 'yellow' | 'blue';
    number: string;
    Icon: LucideIcon
    className?:string
}

export const CardCounter = ({ color, text, number, Icon, className }: IProp) => {

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
        <Card className={'w-1/5 h-[100px] flex justify-between p-3 items-center ' + className} >
            <div className='flex flex-col justify-around sm:justify-center'>
                <span className={`sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold ${colorClass}`}>{number}</span>
                <span className='sm:text-[10px] md:md:text-[10px] lg:text-[12px] font-semibold '>{text}</span>
            </div>
            <div className='hidden md:block lg:block'>
                <Icon size={30} className={`${colorClass} `} />
            </div>
        </Card>
    )
}
