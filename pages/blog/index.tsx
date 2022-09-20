import Link from "next/link";
import ArticlePreview from "../../components/blog/article-preview/article-preview";

const Blog = () => {
    return (
        <div>
            <div className="mx-auto max-w-3xl">
                <div className="p-8 border-b-2">
                    <h1 className="font-black uppercase text-5xl text-center">All Things <em className="text-primary">Front-End</em></h1>
                </div>
                <section>
                    <ArticlePreview />
                    <ArticlePreview />
                </section>
            </div>
        </div>
    )
}

export default Blog;