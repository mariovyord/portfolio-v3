import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type TState = {
    toggle: boolean,
}

const Header = () => {
    const [state, setState] = useState<TState>({
        toggle: false,
    })

    const toggleHamburger = () => {
        setState((prevState) => ({
            ...prevState,
            toggle: !prevState.toggle,
        }))
    }

    const links = [
        {
            link: '/',
            title: 'Portfolio'
        },
        // {
        //     link: '/blog',
        //     title: 'Blog'
        // },
    ]

    return (
        <header className='h-20'>
            <div className='m-auto h-full max-w-screen-2xl text-primary'>
                <div className='flex h-full min-w-full justify-between px-5'>
                    <div className='flex h-full items-center text-2xl font-black uppercase gap-4 '>
                        <Link href='/'>
                            <Image className='pointer hover:cursor-pointer transition-all' src='/images/site/profile-pic.png' alt='profile picture' width={50} height={50} />
                        </Link>
                        <Link href='/' className='hidden sm:inline hover:text-primary-focus'>
                            Mario Yordanov
                        </Link>
                    </div>
                    <nav className='text-xl font-bold uppercase'>
                        <div className='hidden h-full w-full sm:block'>
                            <ul className='flex h-full gap-6'>
                                {links.map(
                                    link => <li key={link.title} className='flex items-center'>
                                        <Link href={link.link} className="hover:text-primary-focus">
                                            {link.title}
                                        </Link>
                                    </li>)}
                            </ul>
                        </div>
                        <div onClick={() => toggleHamburger()} className='h-full sm:hidden'>
                            <div className='flex h-full w-8 cursor-pointer items-center pointer '>
                                <div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
                                    <div className={`${state.toggle && 'absolute right-3 rotate-45'} h-1 w-8 bg-primary transition-all`}></div>
                                    <div className={`${state.toggle ? '' : 'h-1 w-8'} bg-primary transition-all `}></div>
                                    <div className={`${state.toggle && 'absolute right-3 -rotate-45'} h-1 w-8 bg-primary transition-all`}></div>
                                </div>
                            </div>
                            {state.toggle && <ul className={`absolute top-20 left-0 w-screen bg-base p-5 text-center`}>
                                {links.map(
                                    link => <li key={link.title} className='flex items-center'>
                                        <Link href={link.link} className="hover:text-primary-focus my-4">
                                            {link.title}
                                        </Link>
                                    </li>)}
                            </ul>}
                        </div>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header