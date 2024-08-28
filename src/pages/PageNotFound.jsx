import { Link } from "react-router-dom";

export default function PageNotFound(){
    return (
        <div className="min-h-[80vh] flex items-center justify-center font-cotorisBold text-2xl sm:text-3xl text-white flex-col gap-8">
            <p>Error 404 Page Not Found</p>
            <Link to={"/"} type="button" className="flex items-center justify-center mr-1">
                <span className="bg-[#CC9D2F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:text-lg px-3 sm:px-6 py-2 sm:py-3 text-center dark:hover:bg-yellow-500 dark:focus:ring-yellow-800 text-[#5B0017] font-cotorisBold">Return Home</span>
                <img src="./images/button.svg" className="h-10 sm:h-16" />
            </Link>
        </div>
    )
}