import Link from "next/link";

const BlogArticle = () => {
    return (
        <div>
            <section className="mx-auto max-w-3xl">
                <article className='my-12'>
                    <header className="border-2 rounded-md p-4">
                        <h2 className="font-black text-3xl hover:underline mb-2">
                            Ultimate React Router v6 Guide
                        </h2>
                        <p className='mb-3'>25 September 2022</p>
                        <div className='mb-3'>
                            <span className='border-2 rounded-xl py-1 px-2 text-sm bg-slate-700'>React</span>
                        </div>
                        <p className="mb-2">React Router is by far the most popular routing library in React and this article goes in depth on everything you need to know about React Router.</p>
                    </header>
                    <div className="p-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio quo veritatis laborum voluptatum, fugit, atque nisi pariatur assumenda placeat ab minus obcaecati necessitatibus nostrum quaerat facilis sed voluptatibus?</p>
                    </div>
                </article>
            </section>
            <section className="mx-auto max-w-3xl">
                <Link href="/blog" >
                    <a className="p-4 border-2 border-primary rounded-md text-primary hover:bg-primary hover:text-base active:text-sm flex w-fit gap-2 hover:fill-base fill-primary items-center">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" /></svg>
                        </div>
                        Go Back
                    </a>
                </Link>
            </section>
        </div>
    )
}

export default BlogArticle;