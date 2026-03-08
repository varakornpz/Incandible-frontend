'use client'

import { AiOutlineHome } from "react-icons/ai";

import Link from "next/link";
import SignoutBtn from "./SignoutBtn";

import { usePathname } from 'next/navigation'; 

export default ()=>{
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="h-fit w-full flex items-center py-2 px-6 justify-between">
            <Link href={"/"}>
                <AiOutlineHome className="w-10 h-10 text-black"/>
            </Link>
            <div className="flex gap-2 sm:gap-4">
                <div>
                    {pathname != "/dashboard" && pathname != "/signin" && pathname != "/" ?
                        <Link href={"/dashboard"}>
                            <p className="font-semibold text-base">Dashboad</p>
                        </Link>
                    :
                        null
                    }
                </div>
                <div>
                    {pathname.startsWith("/dashboard") ?
                        <SignoutBtn/>
                    :
                    <Link href={"/signin"} className={"text-base font-semibold"}>
                        Sign in
                    </Link>
                    }
                </div>
            </div>
        </div>
    )

}