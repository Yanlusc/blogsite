import React from 'react'
import {sortBlog} from "@/src/utils";
import BlogLayoutOne from "@/src/components/Blog/BlogLayoutOne";
import BlogLayoutTwo from "@/src/components/Blog/BlogLayoutTwo";
import Link from "next/link";

const RecentPosts = ({blogs}) =>{
    const sortedBlogs = sortBlog(blogs);
    const blog = sortedBlogs[0];
    return(
        <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
            <h2 className="w-full inline-block font-bold capitalize text-4xl">
                Recent posts
            </h2>
            <Link href="/categories/all" className="inline-block font-medium text-accent
             underline underline-offset-2 text-lg">
                view all
            </Link>
            <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
                {
                    sortedBlogs.slice(5,11).map((blog, index) => {
                        return (
                        <article className="col-span-1 row-span-1 relative">
                            blog layout 3
                        </article>
                        )
                        })
                }

            </div>

        </section>
    )
}


export default RecentPosts