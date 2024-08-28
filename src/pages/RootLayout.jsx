import {Link, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import { HashLink } from 'react-router-hash-link';
export default function RootLayout() {
    return (
        <>  
            <header >
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer id="footer" className="bg-[#CC9D2F] pt-4">
                <div className="text-center pb-12">
                    <img src="./images/logo.png" className="my-12 mx-auto" alt="" />
                    <ul className="flex gap-8 text-center flex-col sm:flex-row items-center justify-center text-[#5B0017]">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><HashLink to="/#location">Venu</HashLink></li>
                        <li><HashLink to="/#menu">Menu</HashLink></li>
                        <li><HashLink to="/#feedback">Events</HashLink></li>
                        <li><HashLink to="/#footer">Contact us</HashLink></li>
                    </ul>
                </div>
                <div className="border-t border-[#243054] text-[#243054] py-6 relative font-poppins">
                    <div className="container flex flex-col justify-center items-center gap-4 lg:gap-0 lg:block">
                        <p className="lg:absolute top-1/2 lg:-translate-y-1/2 w-fit">© 2021 | All rights reserved.</p>
                        <ul className="flex flex-grow gap-8 text-center items-center justify-center lg:mr-auto">
                            <li><img src="./images/facebook.svg" alt="" /></li>
                            <li><img src="./images/twitter.svg" alt="" /></li>
                            <li><img src="./images/instgram.svg" alt="" /></li>
                            <li><img src="./images/linkedin.svg" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}