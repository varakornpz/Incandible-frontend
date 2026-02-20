import signout from "@/actions/signout"


export default ()=>{
    return(
        <button className="sm:bg-red-500 text-blue-500 underline sm:no-underline sm:text-white px-2 py-1 text-lg rounded-lg hover:cursor-pointer fixed top-4 right-4 z-50 md:static md:bottom-auto md:right-auto md:z-auto" onClick={async ()=>{await signout()}}>
            Sign out
        </button>
    )

}