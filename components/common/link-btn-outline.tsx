import Link from 'next/link'
import React, { ReactNode } from 'react'

const LinkBtnOutline: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Link href="/" className="p-4 border-2 border-primary rounded-md text-primary hover:bg-primary hover:text-base active:text-sm flex w-fit gap-3 hover:fill-base fill-primary items-center">
            {children}
        </Link>
    )
}

export default LinkBtnOutline