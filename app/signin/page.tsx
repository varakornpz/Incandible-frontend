'use client'

import Link from "next/link";


import { FcGoogle } from "react-icons/fc";


const loginUrl = process.env.NEXT_PUBLIC_API_SIGN_IN
const sayhiApi = process.env.NEXT_PUBLIC_API_SAY_HI

export default ()=>{
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col text-lg sm:text-xl items-center gap-y-2">
                <p>
                    Google sign in is the only way,
                    <br className="md:hidden" /> 
                    this is all I can do stop trying
                </p>
                <a href={loginUrl} className="flex items-center bg-white w-fit px-2 py-1 rounded-4xl border border-black/95">
                    <FcGoogle className="w-10 h-10" />
                    <p className="text-black text-xl font-normal">Sign in with Google</p>
                </a>
            </div>
            <div className="pt-4">
                <Link href="/" className="text-blue-500 underline">Back home</Link> 
            </div>
        </div>
    )
}