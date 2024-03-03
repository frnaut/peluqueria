"use client"
import { generateGuid } from '@/lib/utils'
import { Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const BreadCrumbs = () => {
    const [paths, setPaths] = useState<string[]>([])
    const pathname = usePathname()

    useEffect(() => {
        const newPaths: string[] = []
        pathname.split('/').forEach(pa => {
            if (pa.length)
                newPaths.push(pa)
        })
        setPaths(newPaths)
    }, [pathname])


    return (
        <div className='p-5 flex justify-between'>
            <div>
                {
                    paths.map(pa => {
                        return <span key={generateGuid()} className='capitalize font-semibold text-[20px]'>{pa} / </span>
                    })
                }
            </div>
            <Bell className='cursor-pointer hover:text-primary' />
        </div>
    )
}
