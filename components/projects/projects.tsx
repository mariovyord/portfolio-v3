import React from 'react'
import { projects } from '../../data/site/projects'
import ArrowNextSection from '../utils/arrow-next-section'
import ProjectCard from './project-card'

export const Projects = () => {
    return (
        <section id="projects" className='min-h-screen py-24 px-2'>
            <h2 className='h2'>Projects</h2>
            <p className='text-center italic text-xl mb-2'>Small collection</p>
            <div className='px-4 py-8'>
                {projects.map((pr, i) => {
                    return <ProjectCard key={i} project={pr} reverse={i % 2 == 0 ? false : true} />
                })}
            </div>
            <ArrowNextSection link={"#contact"} />
        </section>
    )
}
