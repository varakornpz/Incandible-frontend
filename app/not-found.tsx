import Link from "next/link"


export default ()=>{
    return(
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-semibold">404 Not found</h1>


                <div className="text-left w-full">
                    <Link href={"/"} className="text-blue-500 underline text-xl">Home</Link>
                </div>
            </div>
        </div>
    )
}