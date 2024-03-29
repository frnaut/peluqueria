'use client'

import { LucideIcon } from 'lucide-react';
import React from 'react'

interface IProp {
    text: string;
    onClick: () => void;
    calssName?: string
    Icon?: LucideIcon
}
export const SecundayButton = ({ text, onClick, calssName, Icon }: IProp) => {

    return (
        <>
            <button onClick={() => { onClick() }} type="button" className={`items-center flex justify-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${calssName ?? ''}`}>
                {Icon ? <Icon className='mr-1' /> : ''}  <span>{text}</span>
            </button>


        </>
    )
}
