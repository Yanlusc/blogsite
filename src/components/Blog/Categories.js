import Category from "@/src/components/Blog/Category";
import {slug} from "github-slugger";

const Categories = ({categories, currentSlug}) => {
    return (
        <div className="px-20 mt-10 border-t-2 text-dark border-t
        border-b-2 border-solid border-dark py-4 flex items-start flex-wrap ">
            {
                categories.map((cat) => (
                    <Category
                        key={cat}
                        link={`/categories/${cat}`}
                        name={cat}
                        active={currentSlug === slug(cat)}
                    />
                ))}
        </div>

    )
}

export default Categories