import Link from "next/link";

const page = () => {
    return (
        <div className="animate-fade fixed w-full h-screen top-0 left-0 bg-[#00000066] flex items-center justify-center">
            <form className="w-1/3 bg-white rounded-lg p-5 shadow-2xl">
                <h3 className="text-center my-5">ثبت نظر</h3>
                <div className="flex flex-col my-5">
                    <label className="mb-2">نام کاربری</label>
                    <input type="text" placeholder="از حروف فارسی استفاده کنید" className="rounded-md border p-4" />
                </div>
                <div className="flex flex-col my-5">
                    <label className="mb-2">متن پیام</label>
                    <textarea cols={20} placeholder="متن خود را وارد کنید" className="rounded-md border p-4"></textarea>
                </div>
                <Link href={'/about'}>
                    <button type="button" className="px-5 py-3 rounded-full w-full mt-5 bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white">ثبت نظر</button>
                </Link>
            </form>
        </div>
    )
}

export default page;