import Link from 'next/link'
import React from 'react'

const Submenu = () => {
    return (
        <div className='sticky top-0 h-20 flex flex-col justify-center z-50'>
            <div className='mx-auto my-0 h-fit w-fit flex font-bold uppercase text-primary-content rounded-md'>
                <Link href="#about">
                    <a className='active:scale-95 inline-block w-28 text-center py-2 bg-primary  hover:bg-primary-focus rounded-l-md border-r-2 border-primary-content'>
                        &gt;About</a>
                </Link>
                <Link href="#projects">
                    <a className='active:scale-95 inline-block w-28 text-center py-2 bg-primary  hover:bg-primary-focus'>
                        &gt;Projects</a>
                </Link>
                <Link href="#contact">
                    <a className='active:scale-95 inline-block w-28 text-center py-2 bg-primary  hover:bg-primary-focus rounded-r-md border-l-2 border-primary-content'>
                        &gt;Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default Submenu;