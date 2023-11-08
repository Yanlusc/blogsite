import {format, parseISO} from "date-fns";


export const BlogDetails = ({blog, slug}) =>{
    return (
        <div>
            <time>
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
            </time>
        </div>
    )
}