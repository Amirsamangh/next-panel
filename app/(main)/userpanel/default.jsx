'use client'
import { GrUserExpert } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import React from 'react';
import Cookies from "universal-cookie";
import CustomButton from "@/components/partials/CustomButton";

const Posts = () => {
    const router = useRouter()

    const handleLogout = ()=>{
        const cookieStore = new Cookies(null, {path:"/"})
        cookieStore.remove("loginToken")
        router.push("/")
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <GrUserExpert className="size-20"/>
            <h1 className='my-5'>صفحه کاربر</h1>
            <CustomButton className='bg-red-800 w-64' onClick={handleLogout}>خروج</CustomButton>
        </div>
    );
}

export default Posts;