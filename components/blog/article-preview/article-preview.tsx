import Link from 'next/link'
import React from 'react'
import { TArticle } from '../../../types/types'
import Tag from './tag';

const ArticlePreview: React.FC<{ article: TArticle }> = ({ article }) => {
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const linkPath = `/data/articles/${article.slug}`;

    return (
        <article className='my-20'>
            <header>
                <h2 className="font-black text-3xl hover:underline mb-2">
                    <Link href={linkPath}>{article.title}</Link>
                </h2>
                <p className='mb-3'>{formattedDate}</p>
                <div className='mb-3'>
                    {article.tags.map(x => <Tag key={x} tagName={x} />)}
                </div>
            </header>
            <p className="mb-2">{article.excerpt}</p>
            <Link href={linkPath} >
                <a className="text-blue-400 hover:underline">
                    Read more...
                </a>
            </Link>
        </article>
    )
}

export default ArticlePreview;