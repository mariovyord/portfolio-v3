import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LinkBtnOutline from '../components/common/link-btn-outline';

const custom404 = () => {
    return (
        <div className='w-full min-h-[calc(100vh-232px)] grid grid-cols-1 md:grid-cols-2 mb-52 md:mb-0'>
            <div className='p-4 flex flex-col items-center md:items-end justify-center'>
                <h1 className='font-bold text-3xl uppercase mb-8'>404 | Lost in Space?</h1>
                <LinkBtnOutline>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" /></svg>
                    </div>
                    Go Home
                </LinkBtnOutline>
            </div>
            <div className='flex justify-center items-center relative'>
                <div className='relative'>
                    <div className='astronaut-animated p-4'>
                        {/* from https://www.svgrepo.com/svg/15626/astronaut */}
                        <Image
                            src='/images/site/astronaut.svg'
                            width={400}
                            height={280}
                            alt='astronaut'
                        />
                    </div>
                    <div className='absolute top-48 z-50'>
                        <Image
                            src='/images/site/planet.svg'
                            width={400}
                            height={400}
                            alt='planet'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default custom404;