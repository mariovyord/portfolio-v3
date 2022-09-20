import type { NextPage } from 'next';
import About from '../components/about-me/about-me';
import Contact from '../components/contact/contact';
import Hero from '../components/hero/hero';
import Submenu from '../components/submenu/submenu';
import { Projects } from '../components/projects/projects';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mario Yordanov</title>
            </Head>
            <Hero />
            <Submenu />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
