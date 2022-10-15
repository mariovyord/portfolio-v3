import React from 'react'

const Tag: React.FC<{ tagName: string }> = ({ tagName }) => {
    return (
        <span className='border-2 rounded-xl py-1 px-2 text-sm bg-slate-700'>{tagName}</span>
    )
}

export default Tag