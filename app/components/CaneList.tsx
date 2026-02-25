
import { useContext } from "react"

import { UserContext } from "../providers/UserData";

import Link from "next/link";

import { TbCane } from "react-icons/tb";

export default ()=>{
    const context = useContext(UserContext)

    if(!context){
        return (
            <div className="text-white">Loading...</div>
        )
    }

    const {userData , setUserData} = context
    const Canes = userData?.canes
    return (
        <div className="">
            {Canes ?
            <div className="flex flex-wrap  w-full  gap-y-2 sm:gap-y-2 sm:gap-x-4">
                {
                    Canes.map((cane , index)=>(
                        <Link href={`/dashboard/${cane.cane_id}`} className="flex w-full sm:w-48 h-20 items-center justify-center rounded-md border-2 border-gray-700 bg-[#888888] hover:cursor-pointer" key={index}>
                            <TbCane className="text-white font-bold w-6 h-6"/>
                            <p>{cane.cane_id}</p>
                        </Link>
                    ))
                }
            </div>
            :
            null
            }
        </div>
    )
}