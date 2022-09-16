import Link from 'next/link'
import React from 'react'

const Submenu = () => {
    return (
        <div className='sticky top-0 h-20 flex flex-col justify-center bg-base-darker border-b-2 '>
            <div className='mx-auto my-0 h-fit w-fit flex font-bold uppercase text-primary-content'>
                <Link href="#skills">
                    <a className='inline-block w-28 text-center py-2  hover:text-primary-focus rounded-l-lg'>Skills</a>
                </Link>
                <Link href="#projects">
                    <a className='inline-block w-28 text-center py-2  hover:text-primary-focus'>Projects</a>
                </Link>
                <Link href="#contacts">
                    <a className='inline-block w-28 text-center py-2  hover:text-primary-focus rounded-r-lg'>Contacts</a>
                </Link>
            </div>
        </div>
    )
}

export default Submenu;