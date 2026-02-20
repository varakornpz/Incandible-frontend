'use client'

import axios from "axios"

import { getCookie } from 'cookies-next/client'; 
import { useEffect , useState } from "react";

export default async ()=>{
    const [access_token ,setAccessToken] = useState<undefined | string>("")
    useEffect(()=>{
        const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
        setAccessToken(getCookie("access_token"))
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
            <p>{access_token}</p>
        </div>
    )
}