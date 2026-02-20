'use client'

interface Props {
    email : string 
    name  : string
    profile_pic : string 
    canes?   : string[]
}

import Image from "next/image"

import { CgProfile } from "react-icons/cg";

export default({email , name , profile_pic , canes} : Props)=>{


    return(
        <div className="w-fit px-10 py-5 rounded-lg flex">
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${name == "loading..." ? "animate-pulse" : ""}`}>
                {name == "loading..." ?
                <CgProfile className="text-black w-24 h-24 sm:w-16 sm:h-16 bg-white rounded-full"/>
                :
                <Image className="w-24 h-24 sm:w-16 sm:h-16 rounded-full" src={profile_pic} alt={name} width={720} height={720} />
                }
                <div className="flex flex-col items-center sm:items-baseline w-full sm:w-fit">
                    <p className="text-white text-2xl font-semibold">{name}</p>
                    <p className="text-white text-lg">{email}</p>
                </div>
            </div>
        </div>
    )
}