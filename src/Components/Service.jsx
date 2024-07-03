import React from 'react'
import { services } from './Context'
import logo1 from "../assets/client logo1.png"
import logo2 from "../assets/client logo2.png"
import logo4 from "../assets/client logo4.png"
import logo5 from "../assets/client logo5.png"
import logo6 from "../assets/client logo6.png"
import logo7 from "../assets/client logo7.png"
import logo8 from "../assets/client logo8.png"


const Service = () => {
   

    return (
        <div className='md:px-14 px-4 py-6 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h2 className='md:text-4xl text-3xl text-neutralGray font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGray'>We have been Working with some Fortune 500+ clientes</p>

               <marquee  behavior="scroll" scrollamount="8" direction="left">
               <div className='md:my-6 my-5 flex  justify-evenly items-center gap-8'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                    <img src={logo8} alt="" />
                </div>
               </marquee>

            </div>

            {/* service card   */}
            <div className='md:mt-20 mt-3 text-center md:w-1/2 mx-auto'>
                <h2 className='md:text-4xl text-3xl text-neutralGray font-semibold mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralGray'>Who is Nextcent suitable for?
                </p>
            </div>

            {/* card */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(content => <div key={content.id} className='px-4 py-8 text-center md:w-[300px]
                    mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-500 transition-all duration-300 flex items-center
                    justify-center h-full sm:w-[330px] sm:h-[300px] ' >
                        <div>
                            <div className='mb-4 mx-auto w-14'><img src={content.image} alt="" className='w-[210px]' /></div>
                            <h4 className='text-2xl font-bold text-neutralGray mb-2 px-2'>{content.title}</h4>
                            <p className='text-sm text-neutralGray'>{content.descroption}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Service