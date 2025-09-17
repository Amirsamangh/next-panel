'use client'
import CustomButton from '@/components/partials/CustomButton';
import { useRouter } from 'next/navigation';
import { TbHomeCheck } from "react-icons/tb";

const HomePage = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <TbHomeCheck className='size-20' />
            <h1 className='my-5'>صفحه اصلی</h1>
            <div className="flex gap-4">
                <CustomButton className='bg-green-400 hover:bg-green-500 w-64 cursor-pointer transition-all' onClick={() => router.push("/login")}>صفحه ورود</CustomButton>
                <CustomButton className='bg-sky-400 hover:bg-sky-500 w-64 cursor-pointer transition-all' onClick={() => router.push("/gallery")}>صفحه گالری</CustomButton>
                <CustomButton className='bg-purple-400 hover:bg-purple-600 w-64 cursor-pointer transition-all' onClick={() => router.push("/about")}>درباره ما</CustomButton>
            </div>
        </div>
    );
}

export default HomePage;