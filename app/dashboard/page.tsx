'use client'

import axios from "axios"

import { getCookie } from 'cookies-next/client'; 

export default async ()=>{
    const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
    const access_token = getCookie("access_token")
    var sayHiRes
    if (sayhi_api) {
        sayHiRes = await axios.get(sayhi_api , {
            headers : {
                'Authorization': `Bearer ${access_token}`
            }
        })
        console.log(sayHiRes)
    }
    <div>

    </div>
}