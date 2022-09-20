import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { TArticle } from "../types/types";

const articlesDir = path.join(process.cwd(), '/data/articles');

export const getArticlesFiles = () => {
    return fs.readdirSync(articlesDir);
};

export const getArticleData = (identifier: string) => {
    const slug = identifier.replace(/\.md$/, '');
    const filePath = path.join(articlesDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const articleData = { ...data, content, slug }

    return articleData;
};

export const getAllArticles = () => {
    const articlesFiles = getArticlesFiles();
    return articlesFiles
        .map((x: string) => getArticleData(x))
    // .sort((a: TArticle, b: TArticle) => a.date > b.date ? -1 : 1);
};

