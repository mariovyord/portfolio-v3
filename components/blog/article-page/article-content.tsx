import ReactMarkdown, { Options, Components } from "react-markdown";

const ArticleContent: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div className="prose prose-invert p-4 max-w-none font-serif prose-headings:font-mono">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default ArticleContent;