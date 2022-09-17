export type TSkill = {
    skillName: string,
    classes: string,
}

export type TProject = {
    title: string,
    img: string,
    description: string,
    links: {
        demo: string,
        github: string
    },
    tech: string[]
}