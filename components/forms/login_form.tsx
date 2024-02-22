"use client"

import React from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { PrimaryButton } from '../ui/primary_button'

export const LoginForm = () => {
    return (
        <Card className="w-3/4 h-[300px] p-10">
            <h2 className=''>Iniciar Sesión</h2>
            <form>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Contraseña' />
                <PrimaryButton text='Iniciar Sesión' onClick={() => { }} />
            </form>
            <div>
                <a className='text-blue-500 cursor-pointer hover:underline'>
                    Recuperar contraseña
                </a>
            </div>
        </Card>
    )
}
