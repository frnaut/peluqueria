

import Image from 'next/image'
import React from 'react'
import { SidebarItems } from './sidebar_item'

export const Sidebar = () => {
    return (
        <div className='w-full h-full bg-[#f8f8ff] p-5 shadow-md'>
            <div className='h-1/6 flex w-full justify-center items-center'>
                <Image
                    className='rounded mr-5'
                    width={75}
                    height={75}
                    src={'/images/profile_placeholder.jpg'}
                    alt='logo'
                />
                <div className='flex flex-col'>
                    <span className='text-lg text-primary font-medium'>Juana Perez</span>
                    <span className='text-sm text-gray-400'>Administrador</span>
                </div>
            </div>
            <hr />
            <div className='h-5/6 p-1 flex flex-col'>
                <SidebarItems text='Inicio' url='/dashboard' />
                <SidebarItems text='Citas' url='/dashboard/appoiments' />
                <SidebarItems text='Staff' url='/dashboard/staff' />
                <SidebarItems text='Establechimientos' url='/dashboard/establishments' />
                <SidebarItems text='Usuarios' url='/dashboard/users' />
                <SidebarItems text='Configuración' url='/dashboard/settings' />

            </div>

        </div>
    )
}
