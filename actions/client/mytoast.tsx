'use client'


import { toast , cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';


const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});

export const successNoti = (topic : string , des : string)=>{
        toast.success(
        <div>
            <h1 className="font-bold text-base">
                {topic}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
                {des}
            </p>
        </div>
            , {
        
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: bounce,
        });
}

export const warnNoti = (topic : string , des : string)=>{
    toast.warn(
    <div>
        <h1 className="font-bold text-base">
            {topic}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
            {des}
        </p>
    </div>
        , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition : bounce,
    });
}