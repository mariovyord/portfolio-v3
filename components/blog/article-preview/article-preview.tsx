import Link from 'next/link'
import React from 'react'

const ArticlePreview = () => {
    return (
        <article className='my-20'>
            <header>
                <h2 className="font-black text-3xl hover:underline mb-2">
                    <Link href={`/blog/hello-world`}>Ultimate React Router v6 Guide</Link>
                </h2>
                <p className='mb-3'>25 September 2022</p>
                <div className='mb-3'>
                    <span className='border-2 rounded-xl py-1 px-2 text-sm bg-slate-700'>React</span>
                </div>
            </header>
            <p className="mb-2">React Router is by far the most popular routing library in React and this article goes in depth on everything you need to know about React Router.</p>
            <Link href={`/blog/hello-world`} >
                <a className="text-blue-400 hover:underline">
                    Read more...
                </a>
            </Link>
        </article>
    )
}

export default ArticlePreview