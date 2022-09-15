import { link } from 'fs'
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
        {
            link: '/blog',
            title: 'Blog'
        },
    ]

    return (
        <header className='h-20 text-primary-content shadow'>
            <div className='m-auto h-full max-w-5xl'>
                <div className='flex h-full min-w-full justify-between px-3'>
                    <div className='flex h-full items-center text-2xl font-black uppercase hover:text-primary-focus'>
                        <Link href='/'>Mario Yordanov</Link>
                    </div>
                    <nav className='text-xl font-bold uppercase'>
                        <div className='hidden h-full w-full sm:block'>
                            <ul className='flex h-full gap-6'>
                                {links.map(link => <li key={link.title} className='flex items-center hover:text-primary-focus'><Link href={link.link}>{link.title}</Link></li>)}
                            </ul>
                        </div>
                        <div onClick={() => toggleHamburger()} className='h-full sm:hidden'>
                            <div className='flex h-full w-8 cursor-pointer items-center'>
                                <div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
                                    <div className={`${state.toggle && 'absolute right-3 rotate-45'} h-1 w-8 bg-white transition-all`}></div>
                                    <div className={`${state.toggle ? '' : 'h-1 w-8'} bg-white transition-all `}></div>
                                    <div className={`${state.toggle && 'absolute right-3 -rotate-45'} h-1 w-8 bg-white transition-all`}></div>
                                </div>
                            </div>
                            {state.toggle && <ul className={`absolute top-14 left-0 w-screen bg-lime-700 p-5 text-center `}>
                                <li key='1' className='my-4'><Link href='/1' >Example 1</Link></li>
                                <li key='2' className='my-4'><Link href='/2' >Example 2</Link></li>
                            </ul>}
                        </div>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header