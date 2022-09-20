import React from 'react'
import { TArticle } from '../../../types/types'

const ArticleContent: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div className="p-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
        </div>
    )
}

export default ArticleContent