"use client"
import {useMDXComponent} from "next-contentlayer/hooks";
import Image from "next/image";
export const RenderMdx = ({blog}) =>{

    const mdxComponents ={
        Image
    }

    const MDXContent = useMDXComponent(blog.body.code)

    return(
        <div className="col-span-8 font-int prose prose-lg max-w-max">
            {/*prose-blockquote: bg-accent/20 prose-blockquote: p-2 prose-blockquote: px-6
            prose-blockquote: not-italic prose-blockquote: rounded-r-lg*/}
            <MDXContent components={mdxComponents}/>
        </div>
    )
}