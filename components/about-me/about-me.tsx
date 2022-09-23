import React from 'react'
import SkillCard from './skill-card';
import { skills, js } from '../../data/site/about';
import ArrowNextSection from '../utils/arrow-next-section';
import SectionHeading from '../common/section-heading';

const About = () => {
    const biography = (
        <div className='flex flex-col gap-2'>
            <p>const <span className='text-orange-400 hover:scale-125 inline-block transition-all bg-base'>FrontEndDeveloper</span> = ( &#123; ReactJS &#125; ) =&gt; &#123;</p>
            <p className=' pl-4'>return (</p>
            <p className='pl-8'>
                Hey! I enjoy building web apps with  <span className='text-primary hover:scale-125 inline-block transition-all bg-base'>ReactJS</span>. MERN stack as a whole is pretty fun. I study JavaScript and its ecosystem at <span className='text-primary hover:scale-125 inline-block transition-all bg-base'>SoftUni Bulgaria</span> and on my own. My professional experience is in print as a Prepress Specialist, where I have worked on hundreds of books over the years.
            </p>
            <p className='pl-8'>
                My main goal is growing as a <span className='text-primary hover:scale-125 inline-block transition-all bg-base'>Front-End Developer</span>. But of course as the famous quote goes:
            </p>
            <div className='p-4 text-center relative fill-primary flex gap-3 pl-8'>
                <div className='animate-pulse'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 3c-5.252 1.039-9 4.905-9 10.609v7.391h9.983v-10h-3.983c0-2.211 1.563-4.932 3.996-5.849l-.996-2.151zm14 0c-5.252 1.039-8.983 4.905-8.983 10.609v7.391h9.983v-10h-4c0-2.211 1.563-4.932 3.995-5.849l-.995-2.151zm-.567 1.156l.241.52c-2.394 1.391-3.674 4.159-3.674 6.324v1h4v8h-7.983v-6.391c0-4.687 2.82-8.248 7.416-9.453m-14-.001l.241.521c-2.394 1.391-3.674 4.159-3.674 6.324v1h3.983v8h-7.983v-6.391c0-4.686 2.827-8.247 7.433-9.454" /></svg>
                </div>
                <p>The more you know, the more you realize you don&apos;t know.</p>
                <div className='animate-pulse'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15 21c5.252-1.039 9-4.905 9-10.609v-7.391h-9.983v10h3.983c0 2.211-1.563 4.932-3.996 5.849l.996 2.151zm-14 0c5.252-1.039 8.983-4.905 8.983-10.609v-7.391h-9.983v10h4c0 2.211-1.563 4.932-3.995 5.849l.995 2.151zm.567-1.156l-.241-.52c2.394-1.391 3.674-4.159 3.674-6.324v-1h-4v-8h7.983v6.391c0 4.687-2.82 8.248-7.416 9.453m14 .001l-.241-.521c2.394-1.391 3.674-4.159 3.674-6.324v-1h-3.983v-8h7.983v6.391c0 4.686-2.827 8.247-7.433 9.454" /></svg>
                </div>
            </div>
            <p className='pl-8'>
                So stick around :)
            </p>
            <p className='pl-8 '>)</p>
            <p className='pl-4 '>&#125;</p>
        </div>
    )

    return (
        <section id="about" className='pb-2 pt-24 px-2'>
            <SectionHeading>
                About
            </SectionHeading>
            <p className='text-center italic text-xl mb-2'>React and Express on the tech side,<br /> books on the physical</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-4 py-8 gap-8'>
                {biography}
                <div>
                    <div className='flex flex-wrap gap-3 items-start justify-start'>
                        <div className='-rotate-6 scale-150'><SkillCard skill={js} classes={js.classes} indicator={true} /></div>
                        {skills.map((skill, i) => (
                            <SkillCard key={skill.skillName} skill={skill} classes={skill.classes} indicator={false} />
                        ))}
                    </div>
                </div>
            </div>
            <ArrowNextSection link={"#projects"} />
        </section>
    )
}

export default About;