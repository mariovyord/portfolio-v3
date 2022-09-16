import React, { useReducer, useState } from 'react'
import FocusItem from './focus-item';

const FocusList = () => {
    const list = [
        'Focusing on Front-End w/ ReactJS',
        'Currenly learning Next.js',
        'Studying at SoftUni Bulgaria',
    ];

    return (
        <div>
            <div className='italic font-bold text-4xl hover:text-5xl transition-all duration-300'>
                <FocusItem text={list[0]} initialSpeed={50} />
            </div>
            <div className='italic text-2xl flex justify-end hover:text-4xl transition-all duration-300'>
                <FocusItem text={list[1]} initialSpeed={60} />
            </div>
            <div className='italic text-3xl flex justify-end hover:text-4xl transition-all duration-300'>
                <FocusItem text={list[2]} initialSpeed={80} />
            </div>
        </div>
    )
}

export default FocusList