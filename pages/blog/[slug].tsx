import { GetStaticProps } from "next";
import ArticleContent from "../../components/blog/article-page/article-content";
import ArticleFooter from "../../components/blog/article-page/article-footer";
import ArticleHeader from "../../components/blog/article-page/article-header";
import { getArticleData, getArticlesFiles } from "../../helpers/articles-utils";
import { TArticle } from "../../types/types";

const BlogArticle: React.FC<{ article: TArticle }> = ({ article }) => {
    return (
        <div>
            <section className="mx-auto max-w-3xl">
                <article className='my-12'>
                    <ArticleHeader article={article} />
                    <ArticleContent content={article.content} />
                </article>
            </section>
            <section className="mx-auto max-w-3xl">
                <ArticleFooter />
            </section>
        </div>
    )
}
export const getStaticProps: GetStaticProps = (context) => {
    console.log(context);

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