import ReactMarkdown, { Options, Components } from "react-markdown";

const ArticleContent: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div className="p-4">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default ArticleContent;