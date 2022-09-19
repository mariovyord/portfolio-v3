import type { NextPage } from 'next'
import About from '../components/about-me/about-me'
import Contact from '../components/contact/contact'
import Hero from '../components/hero/hero'
import Submenu from '../components/submenu/submenu'
import { Projects } from '../components/projects/projects'

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Submenu />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
