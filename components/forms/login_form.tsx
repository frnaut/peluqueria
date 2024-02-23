"use client"

import React from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { PrimaryButton } from '../ui/primary_button'
import { useRouter } from 'next/navigation'
export const LoginForm = () => {
    const router = useRouter()
    return (
        <Card className="w-5/6 h-[300px] p-5">
            <h2 className='text-center text-lg'>Iniciar Sesión</h2>
            <form>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Contraseña' />
                <PrimaryButton text='Iniciar Sesión' onClick={() => { router.push('/dashboard') }} />
            </form>
            <div>
                <a className='text-blue-500 cursor-pointer hover:underline'>
                    Recuperar contraseña
                </a>
            </div>
        </Card>
    )
}
