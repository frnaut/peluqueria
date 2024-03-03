'use client'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
import { Eye, Pencil, Trash } from 'lucide-react';
import { IconButton } from '@/components/ui/icon_button';
import { CustomTable } from '@/components/custom/CustomTable';


export type StaffType = {
    id: string;
    name: string;
    speciality: string;
    date: Date
}

const columns: ColumnDef<StaffType>[] = [
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
        accessorKey: 'staff',
        cell: ({ row }) => { return <span>{row.original.speciality}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Especialidad'

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

const data: StaffType[] = [
    { id: 'acd212', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
    { id: 'acd213', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
    { id: 'acd214', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
    { id: 'acd215', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
    { id: 'acd216', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
    { id: 'acd217', name: "Pedro Perez", speciality: 'Lavado de pelo', date: new Date() },
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
            <CustomTable title='Listado de staffs'
            onChangePagination={(value:number)=>{console.log(value)}} totalPages={5} 
                columns={columns} data={data} onChangeSearch={handleOnChangeSearch}
                onDateRangeChange={handleOnDateRangeChange} onSearch={handleOnSearch}
            />

        </>
    )
}
