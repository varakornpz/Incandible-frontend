'use client'

import axios from "axios"

import { getCookie } from 'cookies-next/client'; 
import { useEffect , useState } from "react";

export default ()=>{
    const [access_token ,setAccessToken] = useState<undefined | string>("")
    useEffect(()=>{
        const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
        const token = getCookie("access_token") as string | undefined
        setAccessToken(token)
        const fetchHi = async (api_url : string , t? : string) => {
            const res = await axios.get(api_url ,{
                headers : {
                    'Authorization': `Bearer ${t ?? ""}`
                }
            })
            return res
        }
        if (sayhi_api) {
            const res = fetchHi(sayhi_api , token)
            console.log(res)
        }
    },[])
    return(
        <div>
            <p className="text-white">{(access_token != undefined && access_token != "" )? access_token : "token not found"}</p>
        </div>
    )
}