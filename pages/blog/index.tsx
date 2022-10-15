import ArticlePreview from "../../components/blog/article-preview/article-preview";
import { getAllArticles } from "../../helpers/articles-utils";
import { TArticle } from "../../types/types";
import Head from 'next/head';

const Blog: React.FC<{ articles: TArticle[] }> = ({ articles }) => {
    return (
        <>
            <Head>
                <title>Mario Yordanov - Blog</title>
            </Head>
            <div className="mx-auto max-w-3xl min-h-[calc(100vh_-_232px)] px-6">
                <div className="p-8 border-b-2">
                    <h1 className="font-black uppercase text-5xl text-center">All Things <em className="text-primary">Front-End</em></h1>
                </div>
                <section>
                    {articles.map(x => <ArticlePreview key={x.slug} article={x} />)}
                </section>
            </div>
        </>
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