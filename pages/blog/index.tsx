import Link from "next/link";
import ArticlePreview from "../../components/blog/article-preview/article-preview";
import { getAllArticles } from "../../helpers/articles-utils";
import { TArticle } from "../../types/types";

const Blog: React.FC<{ articles: TArticle[] }> = ({ articles }) => {
    return (
        <div>
            <div className="mx-auto max-w-3xl">
                <div className="p-8 border-b-2">
                    <h1 className="font-black uppercase text-5xl text-center">All Things <em className="text-primary">Front-End</em></h1>
                </div>
                <section>
                    {articles.map(x => <ArticlePreview key={x.slug} article={x} />)}
                </section>
            </div>
        </div>
    )
}

export const getStaticProps = () => {
    const articles = getAllArticles();
    return {
        props: {
            articles,
        },
    }
}

export default Blog;