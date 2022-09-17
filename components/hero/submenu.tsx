import Link from 'next/link'
import React from 'react'

const Submenu = () => {
    return (
        <div className='sticky top-0 h-20 flex flex-col justify-center z-50'>
            <div className='mx-auto my-0 h-fit w-fit flex font-bold uppercase text-primary-content bg-primary rounded-md'>
                <Link href="#about">
                    <a className='active:text-sm inline-block w-28 text-center py-2  hover:text-primary-focus  border-r-2 border-primary-content'>
                        &gt;About</a>
                </Link>
                <Link href="#projects">
                    <a className='active:text-sm inline-block w-28 text-center py-2  hover:text-primary-focus'>
                        &gt;Projects</a>
                </Link>
                <Link href="#contacts">
                    <a className='active:text-sm inline-block w-28 text-center py-2  hover:text-primary-focus border-l-2 border-primary-content'>
                        &gt;Contacts</a>
                </Link>
            </div>
        </div>
    )
}

export default Submenu;