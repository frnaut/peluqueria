'use client'

import React from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { SecundayButton } from '../ui/secunday_button'

import { DatePickerWithRange } from '../ui/date_range_picker'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { CustomPagination } from './CustomPagination'


interface IProp {
    data: any[]
    columns: ColumnDef<any>[]
    onSearch: () => void
    onChangeSearch: (value: string) => void
    onDateRangeChange: (value: any) => void
    totalPages:number
    onChangePagination: (value:number)=>void
}

export const CustomTable = ({ data, columns, onChangeSearch, onDateRangeChange, onSearch, totalPages, onChangePagination }: IProp) => {


    const table = useReactTable({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <Card className='p-5'>
            <h1 className='text-primary font-bold text-2xl'>Listado de citas</h1>

            <div className='flex justify-between mt-2'>
                <div className='w-1/3'>
                    <Input placeholder='Buscador' onChange={(event: any) => {
                        onChangeSearch(event?.target?.value)
                    }} />
                </div>
                <div className='w-2/3 flex justify-end'>
                    <DatePickerWithRange className='mr-5' onChange={(value: any) => {
                        onDateRangeChange(value)
                    }} />
                    <SecundayButton calssName='h-[40px] w-[100px]' onClick={onSearch} text='Buscar' />
                </div>
            </div>

            <div className='mt-5'>
                <Table>
                    <TableHeader className='bg-[#6900fdcb] '>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className='font-bold text-white' key={header.id}>
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

            <div className='mt-5 '>
                <CustomPagination totalPages={totalPages} onChange={onChangePagination}/>
            </div>
        </Card>
    )
}
