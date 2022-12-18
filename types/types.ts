export type TSkill = {
    skillName: string,
    classes: string,
};

export type TProject = {
    title: string,
    img: string,
    description: string,
    links: {
        demo: string | null,
        github: string
    },
    tech: string[]
};

export type TArticle = {
    slug: string,
    title: string,
    excerpt: string,
    date: string,
    content: string,
    tags: string[],
};