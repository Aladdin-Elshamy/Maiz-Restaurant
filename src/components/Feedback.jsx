import { RiDoubleQuotesL } from "react-icons/ri";

export default function Feedback(){
    return (
        <section id="feedback" className="text-[#243054] max-w-[1200px] pt-48 mx-auto flex flex-col items-stretch sm:flex-row relative">
            <div className="bg-[#CC9D2F] min-h-[80vh] xl:min-h-full relative w-full sm:w-3/5 flex p-12 sm:p-24 flex-col justify-between">
                <div>
                    
                    <RiDoubleQuotesL className="mr-auto mt-auto relative right-[5%]"/>
                    <p className="font-sans leading-loose">You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                </div>
                <div className="flex justify-between pt-24 relative pb-4 border-b border-b-[#00646D]">
                    <div className="flex flex-col font-poppins items-start justify-center">
                        <span className="font-[500] text-xs sm:text-sm">Khalid Al Dawsry</span>
                        <span className="text-xs text-[#645f3d] font-bold">Jeddah, Saudi</span>
                    </div>
                    <div>

                        <img src="./images/person-img.png" className="block w-12 h-12 rounded-full object-cover "/>
                        <div className="w-12 h-[2px] bg-[#243054] absolute bottom-0 right-0"></div>
                    </div>
                </div>
                <img src="./images/stroke.png" className="w-8 absolute bottom-4 left-0" alt="" />

            </div>
            <div className="feedback-img flex items-center justify-center w-full sm:w-4/5 min-h-[80vh] xl:min-h-full">
                <img src="./images/play.svg" className="cursor-pointer" alt="" />
            </div>
        </section>
    )
}