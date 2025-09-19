'use client'
import CommentModal from "@/components/about/CommentModal";
import CustomButton from "@/components/partials/CustomButton";
import Link from "next/link";
import { useState } from "react";

const page = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-10 text-xl">درباره ما</h1>
            <p className="text-justify">
                به گزارش ورزش سه، ریکاردو آلوز در شرایطی در روزهای پایانی نقل و انتقالات به سپاهان پیوست که تراکتور مدعی بود این بازیکن قرارداد خود را با این باشگاه فسخ نکرده و همچنان سه سال دیگر تحت قرارداد سرخ‌پوشان تبریزی است.

                به همین دلیل، مدیران تراکتور بلافاصله پس از امضای قرارداد آلوز با سپاهان، موضع‌گیری صریحی داشتند و اعلام کردند از این بازیکن و همچنین باشگاه اصفهانی به دلیل «اغوای بازیکن» شکایت خواهند کرد. در مقابل، سپاهانی‌ها نیز تاکید داشتند که فسخ قرارداد آلوز کاملاً قانونی بوده و آنها هیچ اقدام خلاف مقرراتی انجام نداده‌اند.

                ماجرا زمانی پیچیده‌تر شد که کارت بازی ریکاردو آلوز از سوی سازمان لیگ برای تراکتور صادر شد؛ اقدامی که عملاً باعث شد این بازیکن امکان همراهی با سپاهان را نداشته باشد. همین مسئله پای فدراسیون فوتبال را به میان کشید تا نشستی با حضور نمایندگان دو باشگاه برای حل اختلاف برگزار شود. در این نشست، پیشنهاد شد سپاهان با پرداخت مبلغی به تراکتور، رضایت این باشگاه را جلب کند، اما توافقی میان طرفین شکل نگرفت و در نهایت کمیته انضباطی فدراسیون فوتبال نیز از صدور حکم خودداری کرد و پرونده را به فیفا فرستاد
            </p>
            <div>
                {/* <Link href={'about/honors'} className="px-7 py-2.5 mx-2 bg-amber-200 rounded-3xl hover:bg-amber-300 hover:shadow-xl transition-all">افتخارات</Link> */}
                <CustomButton onClick={() => setShowModal(true)} className={'bg-cyan-200 hover:bg-cyan-50 my-10 px-7 cursor-pointer hover:shadow-xl'}>
                    ثبت نظر
                </CustomButton>
            </div>

            {showModal && (<CommentModal setShowModal={setShowModal} />)}
        </div>
    )
}

export default page;