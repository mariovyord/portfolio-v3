import React from 'react'
import FocusItem from './focus-item';

const FocusList = () => {
    const learning = [
        { link: '#about', text: 'currenly learning UI Router' },
        { link: '#about', text: 'currenly learning Storybook' },
        { link: '#about', text: 'currenly upgrading testing skills' },
        { link: '#about', text: 'currenly getting better at git' },
    ]

    const list = [
        { link: '#about', text: 'Junior Web Developer' },
        { link: '#about', text: 'Angular && React' },
        learning[Math.floor(Math.random() * learning.length)],
        { link: '#about', text: 'welcome to my website :)' },
    ];

    return (
        <div className='bg-slate-900 rounded-md h-[calc(100%_-_80px)] md:h-full sm:text-xl'>
            <div className='bg-slate-300 text-slate-900 fill-slate-900 flex items-center rounded-t-md'>
                <svg clipRule="evenodd" width={'30px'} height={'30px'} fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-13.678 6.365c-.207-.146-.318-.378-.318-.614 0-.603.684-.962 1.182-.612l3.505 2.235c.199.141.318.369.318.613 0 .245-.119.473-.318.614l-3.511 2.257c-.5.353-1.182-.012-1.182-.613 0-.235.111-.467.318-.613l2.641-1.645zm9.678 3.873c0 .414-.336.75-.75.75h-3.5c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h3.5c.414 0 .75.336.75.75z" fillRule="nonzero" /></svg>
                Command Prompt
            </div>
            <div className='p-4'>
                <div>
                    <p>Personal Website [Version 24.12.2022.10:25]</p>
                    <p>(c) Mario Yordanov. All rights reserved.</p>
                </div>
                <br />
                <div className='italic flex'>
                    <FocusItem item={list[0]} initialSpeed={30} />
                </div>
                <br />
                <div className='italic flex'>
                    <FocusItem item={list[1]} initialSpeed={60} />
                </div>
                <br />
                <div className='italic flex'>
                    <FocusItem item={list[2]} initialSpeed={90} />
                </div>
                <br />
                <div className='italic flex'>
                    <FocusItem item={list[3]} initialSpeed={120} />
                </div>
            </div>
        </div>
    )
}

export default FocusList