import Link from 'next/link'
import React from 'react'
import SocialSidebar from '../social-sidebar/social-sidebar'
import FocusList from './focus-list/focus-list'
import Submenu from './submenu'

const Hero = () => {
    return (
        <section className='w-full min-h-[calc(100vh-160px)] pt-8 '>
            <SocialSidebar />
            <div className='mx-auto my-0 w-fit px-14'>
                <h1 className='font-black text-[10vmax] mb-5 leading-tight hover:scale-110 transition-all duration-300'>Hi, I&apos;m Mario</h1>
                <FocusList />
            </div>
        </section>
    )
}

export default Hero;