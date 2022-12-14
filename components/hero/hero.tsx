import React from 'react'
import SocialSidebar from '../social-sidebar/social-sidebar'
import FocusList from './focus-list/focus-list'

const Hero = () => {
    return (
        <section id='hero' className='w-full min-h-[calc(100vh-160px)] p-4 flex align-middle'>
            <SocialSidebar />
            <div className='mx-auto my-0 w-fit '>
                <h1 className='font-black text-6xl sm:text-7xl mb-5 leading-tight text-left sm:text-center hover:scale-110 duration-300 text-primary active:scale-95 transition-all'>
                    <a href="#about">
                        &lt; Hi, I&apos;m Mario /&gt;
                    </a>
                </h1>
                <FocusList />
            </div>
        </section>
    )
}

export default Hero;