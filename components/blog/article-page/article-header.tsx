import React from 'react';
import { TArticle } from '../../../types/types';
import Tag from '../article-preview/tag';

const ArticleHeader: React.FC<{ article: TArticle }> = ({ article }) => {
    return (
        <header className="mb-8">
            <h2 className="font-black text-4xl hover:underline mb-6">
                {article.title}
            </h2>
            <p className='mb-3'>{article.date}</p>
            <div className='mb-8'>
                {article.tags.map(x => <Tag key={x} tagName={x} />)}
            </div>
            <div className='font-serif italic text-right pl-10'>
                {article.excerpt}
            </div>
        </header>
    )
}

export default ArticleHeader;