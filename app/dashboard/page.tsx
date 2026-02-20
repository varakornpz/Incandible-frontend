'use client'

import axios from "axios"

import { useEffect , useState } from "react";

import ProfileCard from "../components/ProfileCard";
import SignoutBtn from "../components/SignoutBtn";

export default ()=>{
    const [me , setMe] = useState({
        name : "loading..." ,
        email : "loading..." ,
        profile_pic : "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" ,
        canes : []
    })
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
                setMe(res.data)
            }
        })
    },[])
    return(
        <div className="w-full min-h-screen flex flex-col sm:px-10">
            <div className="flex flex-col sm:flex-row justify-between items-center relative">
                    <ProfileCard
                    name={me.name}
                    email={me.email}
                    profile_pic={me.profile_pic}
                    canes={me.canes}
                    />
                    <div className="mr-10">
                        <SignoutBtn/>
                    </div>
            </div>
            <div>

            </div>
        </div>
    )
}