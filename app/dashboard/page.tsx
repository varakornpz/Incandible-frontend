'use client'

import axios from "axios"

import { getCookie } from 'cookies-next/client'; 
import { useEffect } from "react";

export default async ()=>{
    useEffect(()=>{
        const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
        const access_token = getCookie("access_token")
        var sayHiRes
        const fetchHi = async (api_url : string) => {
            const res = await axios.get(api_url , {
                headers : {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            return res
        }
        if (sayhi_api) {
            const res = fetchHi(sayhi_api)
            console.log(res)
        }
    },[])
    return(
        <div>
            <p>Hi</p>
        </div>
    )
}