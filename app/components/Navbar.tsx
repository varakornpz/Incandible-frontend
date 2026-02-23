

import { AiOutlineHome } from "react-icons/ai";

import Link from "next/link";

export default ()=>{
    return (
        <div className="h-fit w-full flex items-center bg-black py-2 px-3">
            <Link href={"/"}>
                <AiOutlineHome className="w-10 h-10 text-white"/>
            </Link>
        </div>
    )

}