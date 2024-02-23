"use client"
import React from 'react'

interface IProp {
    text: string;
    onClick: () => void;

}

export const PrimaryButton = ({ text, onClick }: IProp) => {
    return (
        <button onClick={() => { onClick() }} type="button" className="my-3 justify-center w-full text-white bg-[#884dee] hover:bg-[#884dee]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
            {text}
        </button>
    )
}
