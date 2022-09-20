import React from 'react'
import { TArticle } from '../../../types/types'
import ArticleContent from './article-content'
import ArticleFooter from './article-footer'
import ArticleHeader from './article-header'



const ArticleDetails: React.FC<{ article: TArticle }> = ({ article }) => {
    return (
        <article className='my-12'>
            <ArticleHeader article={article} />
            <ArticleContent content={article.content} />
        </article>
    )
}

export default ArticleDetails