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
        { skillName: 'Git / GitHub' },
    ]

    return (
        <section id="about" className='min-h-screen py-24'>
            <h1 className='font-black uppercase text-5xl text-center mb-4'>About me</h1>
            <p className='text-center italic text-xl'>React and Express on the tech side, books on the physical -<br /> you can&apos;t go wrong</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-4 py-8 gap-4'>
                <div>
                    <h3>Bio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iure ratione consequatur sapiente cum aspernatur eos eligendi. Voluptas, magni quis alias blanditiis voluptatibus eveniet obcaecati debitis eos temporibus deleniti excepturi.</p>
                </div>
                <div className='flex flex-wrap gap-3'>
                    {skills.map(skill => <SkillCard key={skill.skillName} skill={skill} />)}
                </div>
            </div>
        </section>
    )
}

export default AboutMe;