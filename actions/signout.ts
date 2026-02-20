'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logoutAction() {
    const mycookie = await cookies()
    mycookie.delete({
        name : "access_token" ,
        domain: process.env.TOKEN_DOMAIN,
        path: '/',
    })

    redirect('/')
}