import Link from "next/link";
import ArticleDetails from "../../components/blog/article-page/article-details";
import ArticleFooter from "../../components/blog/article-page/article-footer";
import { TArticle } from "../../types/types";

const dummy: TArticle = {
    title: 'Hello World',
    tags: ['TypeScript'],
    content: 'First Post in the Blog',
    date: '2022-12-12',
    excerpt: 'TLDR: First',
    slug: '# hello-world'
}


const BlogArticle = () => {
    return (
        <div>
            <section className="mx-auto max-w-3xl">
                <ArticleDetails article={dummy} />
            </section>
            <section className="mx-auto max-w-3xl">
                <ArticleFooter />
            </section>
        </div>
    )
}

export default BlogArticle;