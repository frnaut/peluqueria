'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home, LucideIcon } from 'lucide-react'

interface IProp {
    text: string
    url: string
    Icon: LucideIcon
}

export const SidebarItems = ({ text, url, Icon }: IProp) => {

    const [isActive, setisActive] = useState(false);
    const pathname = usePathname()

    useEffect(() => {

        if (pathname == url)
            setisActive(true)
        else setisActive(false)

    }, [pathname])


    return (
        <Link className={`w-full h-10 rounded p-1 flex  items-center my-[1px] ${isActive ? 'text-white bg-primary' : 'text-[#8b8aae]'} hover:bg-[#7c3aed75] hover:text-white active:bg-primary`} href={url}>
            <Icon className='mr-2' />
            <span>{text}</span>
        </Link>
    )
}
