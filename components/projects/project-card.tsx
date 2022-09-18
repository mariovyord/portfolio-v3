import Image from 'next/image'
import React from 'react'
import { TProject } from '../../types/types'

const ProjectCard: React.FC<{ project: TProject, reverse: boolean }> = ({ project, reverse }) => {
    return (
        <div className={`flex flex-col gap-4  ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className=''>
                <Image className={`rounded-xl border-2 border-primary ${reverse ? 'project-img-reversed' : 'project-img'}`} src={project.img} width={600} height={350} alt="screenshot of social media app" />
            </div>
            <div className={`flex items-center max-w-3xl p-4`}>
                <div className={`flex flex-col ${reverse ? 'items-end' : 'items-start'}`}>
                    <div className=' bg-accent rounded-md relative w-fit p-4 z-20 mb-2'>
                        <div className='bg-base border-2 rounded-md border-accent absolute w-full h-full -left-1 -top-1 -z-20'></div>
                        <h3 className='text-xl font-black z-30 uppercase -translate-x-1 -translate-y-1'>{project.title}</h3>
                    </div>
                    <div className='px-4 py-2'>
                        <p>{project.description}</p>
                    </div>
                    <div className='px-4 py-2 flex gap-4'>
                        <div>
                            <a href={project.links.demo} className='text-primary font-bold hover:text-primary-focus fill-primary hover:fill-primary-focus'>Demo</a>
                        </div>
                        <div>
                            <a href={project.links.github} className='text-primary font-bold hover:text-primary-focus fill-primary hover:fill-primary-focus'>GitHub</a>
                        </div>
                    </div>
                    <div className='px-4 py-2 flex flex-wrap gap-2'>
                        {project.tech.map(x => <div key={x} className='p-2 bg-slate-500 h-fit w-fit rounded-md'>{x}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard