import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { IsJWTExpired } from './utils/jwthandler'

export function proxy(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value
    const path = request.nextUrl.pathname

    const jwtIsValid = token && !IsJWTExpired(token)


    if (jwtIsValid && path === '/signin') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!jwtIsValid && path.startsWith('/dashboard')) {
        const response = NextResponse.redirect(new URL('/signin', request.url))
        if (token) {
             response.cookies.delete('access_token')
        }
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/signin',
        '/dashboard/:path*', 
    ],
}