
import { useContext } from "react"

import { UserContext } from "../providers/UserData";

import Link from "next/link";

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
            <div className="flex gap-x-4">
                {
                    Canes.map((cane , index)=>(
                        <Link href={`/dashboard/${cane.cane_id}`} className="flex w-48 h-20 items-center justify-center rounded-md border-2 border-gray-700 bg-[#888888] hover:cursor-pointer" key={index}>
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