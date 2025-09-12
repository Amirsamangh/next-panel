import Link from "next/link";

const page = ()=>{
    return (
        <div className="flex flex-col justify-center items-center">
            <span>اسلات دوره ها</span>
            <Link href={'/userpanel/finished'} className="text-blue-500">دوره های پایان یافته</Link>
        </div>
    )
}
 
export default page;