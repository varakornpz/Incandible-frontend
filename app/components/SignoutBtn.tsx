'use client'

import signout from "@/actions/signout"


export default ()=>{
    return(
        <button className="text-base font-semibold hover:cursor-pointer" onClick={async ()=>{await signout()}}>
            Sign out
        </button>
    )

}