export default function Menu(){
    return (

        <section id="menu" className="menu min-h-[100vh] flex flex-col justify-center relative z-10 mt-48">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <img src="./images/zegzag-2.png" className="object-cover absolute top-0 left-0" alt="" />
                </div>
                <div className="flex justify-center flex-col gap-8 items-center font-cotorisBold relative z-20">
                    <img src="./images/flower.svg" className="w-14" alt="" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl text-center">
                        A unique menu that reflects the true essence of the Saudi cuisine
                    </h3>
                    <div className="flex flex-col items-start relative ml-2 cursor-pointer">
                        <button className="text-xl font-cotorisBold bg-[#CC9D2F] text-[#5B0017] py-4 px-8">
                            Our Menu
                        </button>
                        <div className="absolute block top-4 -left-2 border-2 border-t-none border-[#CC9D2F] py-6 mb-10 px-16 z-0"> </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 image z-0">
                    <img src="./images/zegzag.png" className="object-cover" alt="" />
                </div>
            </div>
        </section>
    )
}