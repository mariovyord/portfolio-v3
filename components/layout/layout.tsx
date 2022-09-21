import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id='top' className='bg-base text-base-content w-full overflow-hidden'>
            <Header />
            <main className='max-w-screen-2xl mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;