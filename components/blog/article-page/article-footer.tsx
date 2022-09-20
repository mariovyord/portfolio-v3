import Link from 'next/link';
import React from 'react';

const ArticleFooter = () => {
    return (
        <>
            <Link href="/blog" >
                <a className="p-4 border-2 border-primary rounded-md text-primary hover:bg-primary hover:text-base active:text-sm flex w-fit gap-2 hover:fill-base fill-primary items-center">
                    <div>
                        <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" /></svg>
                    </div>
                    Go Back
                </a>
            </Link>
        </>
    )
}

export default ArticleFooter;