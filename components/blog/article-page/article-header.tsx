import React from 'react';
import { TArticle } from '../../../types/types';
import Tag from '../article-preview/tag';

const ArticleHeader: React.FC<{ article: TArticle }> = ({ article }) => {
    return (
        <header className="border-2 rounded-md p-4">
            <h2 className="font-black text-3xl hover:underline mb-2">
                {article.title}
            </h2>
            <p className='mb-3'>{article.date}</p>
            <div className='mb-3'>
                {article.tags.map(x => <Tag key={x} tagName={x} />)}
            </div>
            <p className="mb-2">{article.excerpt}</p>
        </header>
    )
}

export default ArticleHeader;