export default function Location(){
    return (
        <section id="location" className="container relative mt-12 flex flex-col lg:flex-row text-white gap-12 pb-4">
            <img src="./images/place-3.png" className="object-cover" alt="" />
            <div className="background bg-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[cotorisBold]">A distinctive dining destination inspired by the culture.</h2>
                <p className="font-sans mt-4 font-thin text-xl">Experience Al Balad old town of Jeddah vibes.</p>
                <div className="flex flex-col items-start relative ml-2 mt-12 lg:mt-24">
                    <button className="text-xl font-cotorisBold bg-[#CC9D2F] text-[#5B0017] mt-12 py-4 px-8">
                        Our Venu
                    </button>
                    <button className="absolute block top-16 -left-2 border-2 border-t-none border-[#CC9D2F] py-6 mb-10 px-16 z-0"> </button>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap mt-12 gap-8">
                    <img src="./images/place-4.jpg" className="object-cover h-52 sm:max-h-36 sm:w-36" alt="" />
                    <img src="./images/place-2.jpg" className="object-cover h-52 sm:max-h-36 sm:w-36" alt="" />
                    <img src="./images/place-1.jpg" className="object-cover h-52 sm:max-h-36 sm:w-36" alt="" />
                </div>
                <div className="flex items-center justify-between mt-8 lg:mt-0">
                    <div className="w-3/6 h-1 bg-[#CC9D2F] mt-12"></div>
                    <div className="w-14 h-14 border-2 border-[#CC9D2F] rotate-45"></div>
                </div>
            </div>
        </section>
    )
}