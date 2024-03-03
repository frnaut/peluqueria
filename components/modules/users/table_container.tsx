'use client'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react';
import { IconButton } from '@/components/ui/icon_button';
import { CustomTable } from '@/components/custom/CustomTable';

export type UserType = {
    id: string;
    name: string;
    email: string;
    role: string;
    date: Date
    status: string


}

const columns: ColumnDef<UserType>[] = [
    {
        id: 'id',
        accessorKey: 'id',
        cell: ({ row }) => {

            return <span>{row.original.id}</span>
        },
        enableSorting: false,
        enableHiding: false,
        header: 'Id'
    },
    {
        accessorKey: 'name',
        cell: ({ row }) => { return <span>{row.original.name}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Nombre'

    }, {
        accessorKey: 'email',
        cell: ({ row }) => { return <span>{row.original.email}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Email'

    },

    {
        accessorKey: 'role',
        cell: ({ row }) => { return <span >{row.original.role}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Role'

    },
    {
        accessorKey: 'status',
        cell: ({ row }) => { return <span >{row.original.status}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Estado'

    }, 
    {
        accessorKey: 'date',
        cell: ({ row }) => { return <span >{row.original.date.toDateString()}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Fecha de creacion'

    },
    {
        accessorKey: 'actions',
        cell: ({ row }) => {
            return <div className='flex'>
                <IconButton Icon={Eye} iconClass='hover:text-primary cursor-pointer' onClick={()=>{}}/>
                <IconButton Icon={Pencil} iconClass='hover:text-primary cursor-pointer' onClick={()=>{}}/>
                <IconButton Icon={Trash} iconClass='hover:text-primary cursor-pointer' onClick={()=>{}}/>
            </div>
        },
        enableSorting: false,
        enableHiding: false,
        header: 'Acciones'

    },
]

const data: UserType[] = [
    { id: 'acd212', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
    { id: 'acd213', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
    { id: 'acd214', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
    { id: 'acd215', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
    { id: 'acd216', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
    { id: 'acd217', name: "Pedro Perez", email: 'correo@correo.com', date: new Date(), role: "Administrador", status:'active' },
]




export const TableContainer = () => {

    const handleOnChangeSearch = (value: string) => {
        console.log(value)
    }

    const handleOnDateRangeChange = (value: string) => {
        console.log(value)
    }

    const handleOnSearch = () => { }

    return (
        <>
            <CustomTable title='Listado de usuarios'
            onChangePagination={(value:number)=>{console.log(value)}} totalPages={5} 
                columns={columns} data={data} onChangeSearch={handleOnChangeSearch}
                onDateRangeChange={handleOnDateRangeChange} onSearch={handleOnSearch}
            />

        </>
    )
}
