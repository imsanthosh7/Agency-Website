import React from 'react'
import aboutimg from '../assets/Illustration2.png'
import logo1 from '../assets/Members logo.png'
import logo2 from '../assets/Event Bookings logo.png'
import logo3 from '../assets/Clubslogo.png'
import logo4 from '../assets/Paymentslogo.png'

const About = () => {
    return (
        <div >
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' >
                    <div>
                        <img className='w-[400px]' src={aboutimg} alt="aboutimage" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='md:text-4xl text-2xl text-neutralGray font-semibold mb-4  md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
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
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralsliver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                    <div className='md:w-1/2'>
                        <h2 className='md:text-4xl text-3xl text-neutralGray font-semibold mb-4 md:w-3/4'>Helping a local <br /> <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex item gap-4'>
                                <img src={logo1} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold '>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex item gap-4'>
                                <img src={logo2} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold '>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex item gap-4'>
                                <img src={logo3} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold '>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div className='flex item gap-4'>
                                <img src={logo4} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold '>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About