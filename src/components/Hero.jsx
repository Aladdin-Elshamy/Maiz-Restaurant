export default function Hero() {
    return (
        <section id="home" className="text-white container flex flex-nowrap items- flex-col lg:flex-row ">
                <div className="relative z-20 -top-36 background bg-center h-[900px]">
                    <h1 className="font-cotorisBold text-4xl sm:text-5xl md:text-7xl bg-transparent lg:bg-[#5B0017B2] min-w-4xl mt-48 lg:truncate pr-16">Taste the authentic
                    <br className="hidden md:block" /> Saudi cuisine</h1>
                    <p className="font-sans font-thin text-xl max-w-sm leading-none mt-6">Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                    <button className="text-xl font-cotorisBold bg-transparent text-[#CC9D2F] hover:bg-[#CC9D2F] hover:text-[#5B0017] border-2 border-[#CC9D2F] mt-8 py-2 px-4">
                        Our Menu
                    </button>
                    <img src="./images/circle.png" className="block mt-12" alt="" />
                </div>
                <div className="hidden w-[800px] lg:block bottom-[100%] right-[5%] lg:relative z-0">
                    <img src="./images/hero-img.png" className="w-[800px] h-[500px] object-cover" alt="" />
                    <img src="./images/flower.svg" className="absolute -top-7 -right-7" />
                </div>
        </section>
    )
}
