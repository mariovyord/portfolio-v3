import React from 'react'

const ArticleHeader = () => {
    return (
        <header className="border-2 rounded-md p-4">
            <h2 className="font-black text-3xl hover:underline mb-2">
                Ultimate React Router v6 Guide
            </h2>
            <p className='mb-3'>25 September 2022</p>
            <div className='mb-3'>
                <span className='border-2 rounded-xl py-1 px-2 text-sm bg-slate-700'>React</span>
            </div>
            <p className="mb-2">React Router is by far the most popular routing library in React and this article goes in depth on everything you need to know about React Router.</p>
        </header>
    )
}

export default ArticleHeader;