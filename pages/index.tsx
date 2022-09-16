import type { NextPage } from 'next'
import AboutMe from '../components/about-me/about-me'
import Hero from '../components/hero/hero'
import { Projects } from '../components/projects/projects'

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
        </>
    )
}

export default Home
