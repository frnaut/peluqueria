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

export function CustomPagination() {

    const [currentPage, setcurrentPage] = useState<number>(1)
    const [totalPage, settotalPage] = useState<number>(5)

    const handleOnPrevious = () => {
        if (currentPage > 0)
            setcurrentPage(currentPage - 1)
    }

    const handleOnNext = () => {
        setcurrentPage(currentPage + 1)
    }

    const handleChange = (value: number) => {
        setcurrentPage(value)
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handleOnPrevious} href="#" />
                </PaginationItem>
                {
                    totalPage < 4 ?
                        <>

                        </>
                        : <></>
                }

                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={handleOnNext} href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
//TODO: configurar paginacion de la tabla

// <PaginationItem>
//                     <PaginationLink href="#">1</PaginationLink>
//                 </PaginationItem>