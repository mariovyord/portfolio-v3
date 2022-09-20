/* eslint-disable react/no-children-prop */
// @ts-nocheck
import Image from "next/future/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { TArticle } from "../../../types/types";

const ArticleContent: React.FC<{ article: TArticle }> = ({ article }) => {
    const renderers = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={a11yDark}
                    customStyle={{ backgroundColor: 'transparent' }}
                    showLineNumbers={true}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        },
        img(image) {
            return (
                <Image
                    src={`/images/blog/${article.slug}/${image.src}`}
                    alt={image.alt}
                    width={800}
                    height={300}
                    sizes="100vw"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            )
        }
    }

    return (
        <div className="prose prose-invert max-w-none font-serif prose-headings:font-mono">
            < ReactMarkdown
                // eslint-disable-next-line react/no-children-prop
                children={article.content}
                // @ts-ignore
                components={renderers}
            />
        </div >
    )
}

export default ArticleContent;