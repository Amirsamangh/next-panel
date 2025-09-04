const { default: Image } = require("next/image")

const gallery = () => {
    return (
        <div className="grid grid-cols-1 gap-10">
            {/* <div className="grid col-start-2"> */}
                {[...Array(10).keys()].map(num => (
                    <div key={num} className="w-full h-80 my-5 rounded-2xl overflow-hidden relative">
                        <Image
                            src={`/assets/images/a${num + 1}.jpg`}
                            width={1000}
                            height={150}
                            alt={`a${num + 1}`}
                            placeholder="empty"
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="min-w-full min-h-full object-cover"
                        />
                    </div>
                ))}
            {/* </div> */}
        </div>
    )
}

export default gallery;