'use client'



import axios from "axios"

import { useEffect , useState } from "react";

import ProfileCard from "../components/ProfileCard";
import SignoutBtn from "../components/SignoutBtn";
import AddCane from "../components/AddCane";

import { useContext } from "react";
import { UserContext } from "../providers/UserData";
import CaneList from "../components/CaneList";


export default ()=>{
    const context = useContext(UserContext)

    if(!context){
        return (
            <div className="text-white">Loading...</div>
        )
    }

    const {userData , setUserData} = context
    useEffect(()=>{
        const sayhi_api = process.env.NEXT_PUBLIC_API_SAY_HI
        const give_me   = process.env.NEXT_PUBLIC_API + "/app/me"
        const fetchHi = async (api_url : string) => {
            const res = await axios.get(api_url ,{
                withCredentials : true
            })
            return res.data
        }
        if (sayhi_api) {
            const res = fetchHi(sayhi_api)
            console.log(res)
        }

        axios.get(give_me , {
            withCredentials : true
        })
        .then((res)=>{
            if(res.status == 200){
                setUserData({
                    name : res.data.name ,
                    email : res.data.email ,
                    profile_pic : res.data.profile_pic ,
                    canes : res.data.canes
                })
            }
            console.log(res.data.canes)
        })
    },[])
    return(
        <div className="w-full min-h-screen flex flex-col sm:px-10">
            <div className="flex flex-col sm:flex-row justify-between items-center relative pt-10">
                    <ProfileCard
                    name={userData?.name ?? ""}
                    email={userData?.email ?? ""}
                    profile_pic={userData?.profile_pic ?? ""}
                    />
                    <div className="mr-10">
                        <SignoutBtn/>
                    </div>
            </div>
            <div className="w-fit h-fit pt-5">
                <AddCane/>
                <div className="mt-4">
                    <CaneList/>
                </div>
            </div>
        </div>
    )
}