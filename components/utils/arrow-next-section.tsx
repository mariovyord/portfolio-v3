import React from 'react'

const ArrowNextSection: React.FC<{ link: string }> = ({ link }) => {
    return (
        <div className=' flex justify-center mt-4'>
            <a href={link} className='animate-bounce fill-base-content hover:fill-primary'>
                <svg className='rotate-90 active:scale-95' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" /></svg>
            </a>
        </div>
    )
}

export default ArrowNextSection