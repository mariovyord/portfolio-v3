import React from 'react'
import SectionHeading from '../common/section-heading'

const Contact = () => {
    return (
        <section id="contact" className='py-24 px-2'>
            <SectionHeading>
                Contact
            </SectionHeading>
            <p className='text-center italic text-xl mb-6'>Pick wisely</p>
            <div className='fill-primary-content text-primary-content p-2 flex flex-wrap md:flex-nowrap w-full gap-2'>
                <div className="    w-full">
                    <a className=" hover:bg-primary-focus bg-primary rounded-md p-6 text-2xl flex justify-center items-center gap-3 text-center font-black" href="https://github.com/mariovyord" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <div className="">GitHub</div>
                    </a>
                </div>
                <div className="  w-full">
                    <a className="hover:bg-primary-focus bg-primary rounded-md p-6 text-2xl flex justify-center items-center gap-3 text-center font-black" href="https://www.linkedin.com/in/mariovyordanov/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                        <div className="">LinkedIn</div>
                    </a>
                </div>
                <div className="    w-full" >
                    <a className=" hover:bg-primary-focus bg-primary rounded-md p-6 text-2xl flex justify-center items-center gap-3 text-center font-black" href="mailto:mariovyordanov@gmail.com" target="_blank" rel="noreferrer">
                        <svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
                        </svg>
                        <div className="">Email</div>
                    </a>
                </div>
            </div>
            <div className='flex justify-center items-center p-16 '>
                <a
                    className='w-fit mx-auto italic active:text-sm flex hover:text-slate-400'
                    href="#top"
                >
                    expect(<div className='text-primary animate-bounce'>BACK_TO_TOP</div>).toBe(true);
                </a>
            </div>
        </section>
    )
}

export default Contact