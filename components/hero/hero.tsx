import Link from 'next/link'
import React from 'react'
import SocialSidebar from '../social-sidebar/social-sidebar'

const Hero = () => {
    return (
        <section className='w-full min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8'>
            <SocialSidebar />
            <div className='mx-auto my-0 w-fit'>
                <h1 className='font-bold text-4xl mb-5'>👋 Hi, I&apos;m Mario</h1>
                <p className='italic text-2xl my-4'>🎯 Focusing on ReactJS</p>
                <p className='italic text-2xl my-4'>🎓 Studying at SoftUni Bulgaria</p>
            </div>
            <div className='h-20 flex flex-col justify-center'>
                <div className='mx-auto my-0 h-fit w-fit flex font-bold uppercase text-primary-content'>
                    <Link href="#skills">
                        <a className='inline-block w-28 text-center py-2  hover:text-primary-focus rounded-l-lg'>Skills</a>
                    </Link>
                    <Link href="#Projects">
                        <a className='inline-block w-28 text-center py-2  hover:text-primary-focus'>Projects</a>
                    </Link>
                    <Link href="#contacts">
                        <a className='inline-block w-28 text-center py-2  hover:text-primary-focus rounded-r-lg'>Contacts</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero