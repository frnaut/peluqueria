'use client'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react';
import { IconButton } from '@/components/ui/icon_button';
import { CustomTable } from '@/components/custom/CustomTable';


export type ServiceType = {
    id: string;
    name: string;
    description: string;
    createdat: Date;
}

const columns: ColumnDef<ServiceType>[] = [
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
        header: 'Nombre del servicio'

    }, {
        accessorKey: 'description',
        cell: ({ row }) => { return <span>{row.original.description}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Descripcion'

    },


    {
        accessorKey: 'createdat',
        cell: ({ row }) => { return <span >{row.original.createdat?.toLocaleDateString()}</span> },
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

const data: ServiceType[] = [
    { id: 'acd212', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
    { id: 'acd213', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
    { id: 'acd214', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
    { id: 'acd215', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
    { id: 'acd216', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
    { id: 'acd217', name: "Corte de pelo", description: 'Descripcion', createdat: new Date() },
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
            <CustomTable title='Listado de servicios'
            onChangePagination={(value:number)=>{console.log(value)}} totalPages={5} 
                columns={columns} data={data} onChangeSearch={handleOnChangeSearch}
                onDateRangeChange={handleOnDateRangeChange} onSearch={handleOnSearch}
            />

        </>
    )
}
