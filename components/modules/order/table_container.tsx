'use client'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react';
import { IconButton } from '@/components/ui/icon_button';
import { CustomTable } from '@/components/custom/CustomTable';


export type OrderType = {
    id: string;
    clientname: string;
    totalAmount: string;
    staff: string;
    date: Date

}

const columns: ColumnDef<OrderType>[] = [
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
        accessorKey: 'clientname',
        cell: ({ row }) => { return <span>{row.original.clientname}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Nombre del cliente'

    }, {
        accessorKey: 'staff',
        cell: ({ row }) => { return <span>{row.original.staff}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Staff'

    },


    {
        accessorKey: 'totalAmount',
        cell: ({ row }) => { return <span >$ {row.original.totalAmount}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Monto total'

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

const data: OrderType[] = [
    { id: 'acd212', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
    { id: 'acd213', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
    { id: 'acd214', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
    { id: 'acd215', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
    { id: 'acd216', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
    { id: 'acd217', clientname: "Pedro Perez", totalAmount: '100.00', date: new Date(), staff: "Juan Sanchez" },
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
            <CustomTable
            title='Listado de ordenes'
            onChangePagination={(value:number)=>{console.log(value)}} totalPages={5} 
                columns={columns} data={data} onChangeSearch={handleOnChangeSearch}
                onDateRangeChange={handleOnDateRangeChange} onSearch={handleOnSearch}
            />

        </>
    )
}
