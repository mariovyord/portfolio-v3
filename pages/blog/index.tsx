import Link from "next/link";
import ArticlePreview from "../../components/blog/article-preview/article-preview";
import { TArticle } from "../../types/types";

const dummy: TArticle[] = [
    {
        title: 'Hello World',
        tags: ['TypeScript'],
        content: 'First Post in the Blog',
        date: '2022-12-12',
        excerpt: 'TLDR: First',
        slug: 'hello-world'
    }
]

const Blog = () => {
    return (
        <div>
            <div className="mx-auto max-w-3xl">
                <div className="p-8 border-b-2">
                    <h1 className="font-black uppercase text-5xl text-center">All Things <em className="text-primary">Front-End</em></h1>
                </div>
                <section>
                    {dummy.map(x => <ArticlePreview key={x.slug} article={x} />)}
                </section>
            </div>
        </div>
    )
}

export default Blog;