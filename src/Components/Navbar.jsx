import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';

import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [ismenuOpen, setmenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);


    // toggle menu 
    const toggleMenu = () => {
        setmenuOpen(!ismenuOpen);
    }

    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 100) {
                setisSticky(true);
            }
            else {
                setisSticky(false);
            }
        };
        window.addEventListener('scroll', handelScroll);


        return () => {
            window.addEventListener('scroll', handelScroll);
        }
    });

    // navitems arry 
    const navitems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "products" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""} `}>
                <div className='flex justify-between  items-center text-base gap-8'>
                    <a href=""><img src={logo} className='w-40' alt="" /></a>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navitems.map(({ link, path }) =>
                                <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900
                               hover:text-brandPrimary first:font-medium cursor-pointer'>{link}</Link>
                            )
                        }
                    </ul>

                    {/* btn for large device  */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGray'>Sign in</button>
                    </div>

                    {/* menu btn for only mobile devices  */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-neutralGray focus:outline-none focus:text-gray-500 '>
                            {ismenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)}
                        </button>
                    </div>
                </div>

                {/* nav item for mobile  */}
                <div className={`space-y-4 px-4 py-5 mt-16 bg-brandPrimary ${ismenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navitems.map(({ link, path }) =>
                            <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white
                               hover:text-black first:font-medium'>{link}</Link>
                        )
                    }
                </div>

            </nav>

        </header>
    )
}

export default Navbar