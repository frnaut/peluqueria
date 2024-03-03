'use client'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react';
import { IconButton } from '@/components/ui/icon_button';
import { CustomTable } from '@/components/custom/CustomTable';



export type EstablishmentType = {
    id: string;
    name: string;
    address: string;
    status: string;
    date: Date

}

const columns: ColumnDef<EstablishmentType>[] = [
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
        accessorKey: 'address',
        cell: ({ row }) => { return <span>{row.original.address}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Direccion'

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
        cell: ({ row }) => { return <span >{row.original.date.toLocaleDateString()}</span> },
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

const data: EstablishmentType[] = [
    { id: 'acd212', name: "Sucursal 1", address: 'Una direccion', date: new Date(), status: "active" },
    { id: 'acd213', name: "Sucursal 2", address: 'Una direccion', date: new Date(), status: "active" },
    { id: 'acd214', name: "Sucursal 3", address: 'Una direccion', date: new Date(), status: "active" },
    { id: 'acd215', name: "Sucursal 4", address: 'Una direccion', date: new Date(), status: "active" },
    { id: 'acd216', name: "Sucursal 5", address: 'Una direccion', date: new Date(), status: "active" },
    { id: 'acd217', name: "Sucursal 6", address: 'Una direccion', date: new Date(), status: "active" },
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
            <CustomTable title='Listdo de sucursales'
            onChangePagination={(value:number)=>{console.log(value)}} totalPages={5} 
                columns={columns} data={data} onChangeSearch={handleOnChangeSearch}
                onDateRangeChange={handleOnDateRangeChange} onSearch={handleOnSearch}
            />

        </>
    )
}
