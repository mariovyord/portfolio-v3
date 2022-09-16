import type { NextPage } from 'next'
import AboutMe from '../components/about-me/about-me'
import Hero from '../components/hero/hero'
import Submenu from '../components/hero/submenu'
import { Projects } from '../components/projects/projects'

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Submenu />
            <AboutMe />
            <Projects />
        </>
    )
}

export default Home
