/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ArticleContent: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div className="prose prose-invert max-w-none font-serif prose-headings:font-mono">
            <ReactMarkdown
                // eslint-disable-next-line react/no-children-prop
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                // @ts-ignore
                                style={a11yDark}
                                // @ts-ignore
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
                    }
                }}
            />,
        </div>
    )
}

export default ArticleContent;