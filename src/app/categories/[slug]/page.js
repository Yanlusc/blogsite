import {allBlogs} from "contentlayer/generated";
import {slug} from "github-slugger";
import Categories from "@/src/components/Blog/Categories";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";


const CategoryPage = ({params}) =>{

    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog)=>{
        return blog.tags.some( tag =>{
            const slugified = slug(tag);
            if(!allCategories.includes(slugified)){
                allCategories.push(slugified)
            }
            if(params.slug ==="all"){
                return true;
            }
            return slugified === params.slug
        })
    })

    return <article>
        <div>
            <h1>
                #{params.slug}
            </h1>
            <span>
                Discover more categories and expand your knowledge
            </span>
        </div>
        <Categories categories={allCategories} currentSlug={params.slug}/>
        <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
            {
                blogs.map((blog,index) =>
                    <article className="col-span-1 row-span-1 relative" key={index}>
                        <BlogLayoutThree blog={blog}/>
                    </article>)
            }


        </div>
    </article>
}

export default CategoryPage