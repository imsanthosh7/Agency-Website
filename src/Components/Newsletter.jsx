import React from 'react'
import rightarrow from "../assets/whiteRight.png"

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralsliver py-16'>
            <div className='flex items-center justify-center md:w-3/5 mx-auto'> 
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                        Pellentesque suscipit fringilla libero eu.
                    </h2>
                    <div>
                        <button className='px-7 py-2 bg-brandPrimary rounded hover:bg-neutralGray
              transition-all duration-300 hover:-translate-y-4 text-white '>Get a Demo < img className='inline-block' src={rightarrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;