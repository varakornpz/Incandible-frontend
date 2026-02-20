'use client'

import axios from "axios"

import { useEffect , useState } from "react";

export default ()=>{
    useEffect(()=>{
        const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
        const fetchHi = async (api_url : string) => {
            const res = await axios.get(api_url ,{
                withCredentials : true
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
            <p className="text-white">Hello</p>
        </div>
    )
}