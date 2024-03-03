'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

interface IProp{
    totalPages:number;
    onChange:(value:number)=>void
}

export function CustomPagination({ totalPages, onChange }:IProp) {

    const [currentPage, setcurrentPage] = useState<number>(1)
    const [totalPage, settotalPage] = useState<number>(5)

    const handleOnPrevious = () => {
        if (currentPage > 0){
            setcurrentPage(currentPage - 1)
            onChange(currentPage - 1)
        }
            
    }

    const handleOnNext = () => {
        setcurrentPage(currentPage + 1)
        onChange(currentPage + 1)
        
    }

    const handleChange = (value: number) => {
        setcurrentPage(value)
        onChange(value)

    }

    const renderNumber = (total:number) =>{
        const components:any[] =[]
        for (let i = 1; i <= total; i++) {
            components.push(
              <PaginationItem onClick={()=>{handleChange(i)}}>
                <PaginationLink href="#">{i}</PaginationLink>
              </PaginationItem>
            );   
        }

        return <>
        {components.map(component => component)}
        </>
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handleOnPrevious} href="#" />
                </PaginationItem>
                {
                    renderNumber(totalPage)
                }
                <PaginationItem>
                    <PaginationNext onClick={handleOnNext} href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
//TODO: configurar paginacion de la tabla

