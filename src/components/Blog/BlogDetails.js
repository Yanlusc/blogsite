import {format, parseISO} from "date-fns";
import Link from "next/link";
import {slug} from "github-slugger";


export const BlogDetails = ({blog, slug: blogSlug}) =>{
    console.log(blog);
    return (
        <div className="px-10 bg-accent text-light py-2 flex items-center justify-around
        flex-wrap text-xl font-medium mx-10 rounded-lg">
            <time>
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
            </time>
            <span> 10 views</span>
            <div>{blog.readingTime.text}</div>
            <Link href={`/categories/${slug(blog.tags[0])}`}>
                #{blog.tags[0]}

            </Link>
        </div>
    )
}