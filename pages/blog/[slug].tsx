import { GetStaticProps } from "next";
import Head from "next/head";
import ArticleContent from "../../components/blog/article-page/article-content";
import ArticleFooter from "../../components/blog/article-page/article-footer";
import ArticleHeader from "../../components/blog/article-page/article-header";
import { getArticleData, getArticlesFiles } from "../../helpers/articles-utils";
import { TArticle } from "../../types/types";

const BlogArticle: React.FC<{ article: TArticle }> = ({ article }) => {
    return (
        <div className="min-h-[calc(100vh_-_232px)] px-6">
            <Head>
                <title>{article.title}</title>
            </Head>
            <section className="mx-auto max-w-3xl py-6">
                <article>
                    <ArticleHeader article={article} />
                    <ArticleContent article={article} />
                </article>
            </section>
            <section className="mx-auto max-w-3xl py-6">
                <ArticleFooter />
            </section>
        </div >
    )
}

export const getStaticProps: GetStaticProps = (context) => {
    const { params } = context;
    const { slug } = params as { slug: string };

    const article = getArticleData(slug);

    return {
        props: {
            article,
        },
        revalidate: 600,
    }
}

export const getStaticPaths = () => {
    const articlesFiles = getArticlesFiles();
    const slugs = articlesFiles.map(x => x.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({
            params: {
                slug,
            }
        })),
        fallback: false,
    }
}

export default BlogArticle;