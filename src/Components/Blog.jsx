import React from 'react'
import right from "../assets/Right.png"
import { blogs } from './Context'

const Blog = () => {

    
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ' id='faq'>
            <div className='text-center'>
                <h2 className='md:text-4xl text-3xl text-neutralGray font-semibold mb-4 '>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGray mb-8 md:w-3/4 mx-auto'>
                    The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who's joining the community, read about how our community are
                    increasing their membership income and lot's more.
                </p>
            </div>

            {/* blogs  */}
            <div className='grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGray font-semibold'>{blog.title}</h3>
                        <div className='flex justify-center'>
                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Readmore</a>
                        <img src={right} alt="" />
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog