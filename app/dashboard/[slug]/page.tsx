'use client'

import { notFound, useParams } from 'next/navigation'

import { useContext } from 'react'

import Link from 'next/link'

import axios from 'axios'

import { UserContext , type userData , type userContextType } from '../../providers/UserData'

import { toast } from 'react-toastify';

import { LuFlashlight } from "react-icons/lu";
import { AiOutlineSound } from "react-icons/ai";
import { FaRegMap } from "react-icons/fa6";

import { successNoti, warnNoti } from '@/actions/client/mytoast'

export default function Page() {
    const params = useParams()
    const slug = params.slug

    const context = useContext(UserContext)
    if(!context){
        return (
            <div className="text-white">Loading...</div>
        )
    }
    const {userData , setUserData} = context
    if (userData === null) {
        return <div className="text-white">Loading data...</div>
    }

    if (!slug) {
        notFound()
    }

    const isCaneExist = userData?.canes.some((cane)=>{
        console.log(cane.cane_id)
        return cane.cane_id == slug
    })

    if (!isCaneExist){
        notFound()
    }

    const caneActionApi = process.env.NEXT_PUBLIC_API_CANE_ACTION

    const handleLight = async ()=>{
        try{     
            toast.dismiss()
            if(!caneActionApi){
                warnNoti("Internal website error." , "Cant load action api url in local varriable.")
                return
            }
            axios.post(caneActionApi , {
                cane_id : slug ,
                action : "LIGHT"
            },{withCredentials : true})
            .then((res)=>{
                if (res.status == 200){
                    successNoti("Send action success." , res.data.msg)
                }
            })
            .catch((err)=>{
                warnNoti("Send fail." , err?.response?.data?.msg ?? "Unknow server error.")
            })

        }
        catch{

        }
        finally{

        }
    }

    const handleSound = ()=>{
        try{
            toast.dismiss()
            if(!caneActionApi){
                warnNoti("Internal website error." , "Cant load action api url in local varriable.")
                return
            }
            axios.post(caneActionApi , {
                cane_id : slug ,
                action : "SOUND"
            },{withCredentials : true})
            .then((res)=>{
                if (res.status == 200){
                    successNoti("Send action success." , res.data.msg)
                }
            })
            .catch((err)=>{
                warnNoti("Send fail." , err?.response?.data?.msg ?? "Unknow server error.")
            })

        }
        catch{

        }
        finally{

        }
    }

    return(
        <div className='px-10 pt-10 flex flex-col'>
            <div>
                <p className='text-4xl font-bold'>{slug}'s dashboard</p>
            </div>
            <div className='mt-5 flex flex-col gap-6'>
                <Link href={`${slug}/map`} className='flex items-center bg-blue-400 w-fit px-3 rounded-md border-2 border-gray-700'>
                    <p className='font-semibold text-2xl'>Open the map</p>
                    <FaRegMap className='w-14 h-14 mx-2 my-2'/>
                </Link>
                <div onClick={handleLight} className='bg-[#121212] border-2 border-gray-700 rounded-md w-fit h-fit hover:cursor-pointer'>
                    <LuFlashlight className='w-14 h-14 mx-2 my-2'/>
                </div>
                <div onClick={handleSound} className='bg-[#121212] border-2 border-gray-700 rounded-md w-fit h-fit hover:cursor-pointer'>
                    <AiOutlineSound className='w-14 h-14 mx-2 my-2'/>
                </div>
            </div>
        </div>
    )

}