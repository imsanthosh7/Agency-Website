import React from 'react'
import aboutimg from '../assets/Illustration3.png'
import tesla from '../assets/tesla.png'
import logo1 from "../assets/client logo1.png"
import logo2 from "../assets/client logo2.png"
import logo4 from "../assets/client logo4.png"
import logo5 from "../assets/client logo5.png"
import logo6 from "../assets/client logo6.png"
import logo7 from "../assets/client logo7.png"
import logo8 from "../assets/client logo8.png"
import right from "../assets/Right.png"

const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ' id='products'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' >
                    <div>
                        <img className='w-[400px]' src={aboutimg} alt="aboutimage" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='md:text-4xl text-3xl text-neutralGray font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='text-sm text-neutralGray mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                            vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique
                            iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
                            tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className='px-7 py-2 bg-brandPrimary rounded hover:bg-neutralGray
      transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company states */}
            <div className='px-4 lg:px-14 h-full max-w-screen-2xl mx-auto bg-neutralsliver py-16' id='testimonial'>
                <div className='flex  flex-col md:flex-row justify-between items-center gap-3'>
                    <div className='md:w-1/3'>
                        <img width={330} src={tesla} alt="" />
                    </div>



                    {/* status */}
                    <div className='md:w-3/5 mx-auto'>
                        <div >
                            <p className='md:w-4/5 lg:w-auto text-sm text-neutralGray mb-8 mt-10 leading-7'>
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
                                vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                                tristique quam in,gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
                                elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
                                quis tristique nulla sodales.Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                                Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                                Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGray'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-5 mt-3 flex-wrap'>
                                    <img src={logo1} alt="" className='cursor-pointer' />
                                    <img src={logo2} alt="" className='cursor-pointer' />
                                    <img src={logo4} alt="" className='cursor-pointer' />
                                    <img src={logo5} alt="" className='cursor-pointer' />
                                    <img src={logo6} alt="" className='cursor-pointer' />
                                    <img src={logo7} alt="" className='cursor-pointer' />
                                    <img src={logo8} alt="" className='cursor-pointer' />
                                    <div className='flex items-center gap-1 '>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers </a>
                                        <img src={right} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default Products