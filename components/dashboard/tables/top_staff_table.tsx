
'use client'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';

export type TopStaffTableType = {
    id: string;
    name: string;
    count: string
}

const columns: ColumnDef<TopStaffTableType>[] = [
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
        cell: ({ row }) => { return <div className='min-w-[300px] '><span >{row.original.name}</span></div> },
        enableSorting: false,
        enableHiding: false,
        header: 'Nombre',

    },
    {
        accessorKey: 'count',
        cell: ({ row }) => { return <span className='font-semibold'>{row.original.count}</span> },
        enableSorting: false,
        enableHiding: false,
        header: 'Cantidad de ordenes',


    },
]

const data: TopStaffTableType[] = [
    { id: 'acd212', name: "Juan Perez", count: '2k' }, { id: 'acd213', name: "Juan Perez", count: '1.5k' },
    { id: 'acd214', name: "Juan Perez", count: '950' }, { id: 'acd215', name: "Juan Perez", count: '800' },
    { id: 'acd212', name: "Juan Perez", count: '2k' },
]


export const TopStaffTable = () => {

    const table = useReactTable({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className='w-full'>
            <Table>
                <TableHeader className='bg-[#6900fdcb] '>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead className='font-bold text-white ' key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
