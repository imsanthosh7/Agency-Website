import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/footerlogo.png';

const Myfooter = () => {
    return (
        <Footer container className='bg-[#263238]'>
            <div className="w-full ">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
                    <div className='space-y-4 pb-8 p-2 md:p-14'>
                        <a href=""><img src={logo} className='w-40' alt="" /></a>
                        <div className='md:w-2/3'>
                            <p className=' text-white'>The Nexcent blog is the best place to read about the latest membership insights, trends and more.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Company" className='text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='text-neutral-300 '>About us</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300 '>Blog</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300 '>Contact us</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300 '>Pricing</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300 '>Testimonials</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Support" className='text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='text-neutral-300'>Help center</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300'>Terms of service</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300'>Legal</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300'>Privacy policy</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300'>Status</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className='text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='text-neutral-300'>Privacy Policy</Footer.Link>
                                <Footer.Link href="#" className='text-neutral-300'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    {/* <Footer.Copyright  className='text-neutral-200' href="#" /> */}
                    <h1 className='text-neutral-300'>Copyright © 2024 Nexcent ltd.All rights reserved</h1>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" className='text-white hover:text-neutral-400' icon={BsFacebook} />
                        <Footer.Icon href="#" className='text-white hover:text-neutral-400' icon={BsInstagram} />
                        <Footer.Icon href="#" className='text-white hover:text-neutral-400' icon={BsTwitter} />
                        <Footer.Icon href="#" className='text-white hover:text-neutral-400' icon={BsDribbble} />
                    </div>
                </div>

            </div>
        </Footer>
    )
}

export default Myfooter