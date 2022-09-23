import React, { ReactNode } from 'react';

const SectionHeading: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <h2 className='font-black uppercase text-5xl text-center mb-4'>
            {children}
        </h2>
    )
}

export default SectionHeading;