'use client'

import { LucideIcon } from "lucide-react"

interface IProp{
    Icon:LucideIcon
    iconClass:string
    onClick:()=>void
}

export function IconButton({Icon,onClick, iconClass}:IProp){
    return <button onClick={onClick}>
        <Icon className={iconClass}/>
    </button>
}