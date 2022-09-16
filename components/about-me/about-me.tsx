import React from 'react'
import { TSkill } from '../../types/types';
import SkillCard from './skill-card';

const AboutMe = () => {
    const skills: TSkill[] = [
        { skillName: 'JavaScript' },
        { skillName: 'TypeScript' },
        { skillName: 'React' },
        { skillName: 'Redux Toolkit' },
        { skillName: 'Next.js' },
        { skillName: 'HTML / CSS' },
        { skillName: 'TailwindCSS' },
        { skillName: 'NodeJS' },
        { skillName: 'Express' },
        { skillName: 'MongoDB' },
        { skillName: 'Jest / Testing Library' },
    ]

    return (
        <section className='bg-primary text-primary-content'>
            <h1 className='font-black uppercase text-5xl text-center'>About me</h1>
            <p className='text-center italic text-xl'>Im focues on Fron End with Raeeactj as dpka skdpas pdas ldas </p>
            <div>
                {skills.map(skill => <SkillCard key={skill.skillName} skill={skill} />)}
            </div>
        </section>
    )
}

export default AboutMe;