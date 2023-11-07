import React from "react";
import {sortBlog} from "@/src/utils";
import Image from "next/image";

import {Tag} from "@/src/components/Elements/Tag";

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlog(blogs);
    const blog = sortedBlogs[0];

    console.log(blog);

    return (
        <div className="w-full inline-block">
            <article
                className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full
                bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0"/>
                <Image src={blog.image.filePath.replace("../public", "")}
                       placeholder='blur'
                       blurDataURL={blog.image.blurhashDataUrl}
                       alt={blog.title}
                       fill
                       className="w-full h-full object-center object-cover rounded-3xl -z-10"
                />
                <div className='w-3/4 p-16 flex flex-col items-start justify-center text-white z-0 '>

                    <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}/>

                        <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                                <span className='bg-gradient-to-r from-accent to-accent
                                 bg-[length:0px_6px]
                                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                                {blog.title}
                                </span>
                        </h1>

                    <p className='inline-block mt-4 text-xl font-in'>
                        {blog.description}
                    </p>

                </div>
            </article>
        </div>
    )
}


export default HomeCoverSection