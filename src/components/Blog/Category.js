import Link from "next/link";
import {cx} from "@/src/utils";

const Category =({link, name,active,...props}) =>{
    return(
        <Link href={link} className={cx("inline-block py-3 px-10  " +
            "rounded-full capitalize font-semibold border border-solid border-light hover:scale-105 " +
            "transition-all ease duration-200 m-2 "
            ,props.className,active ? "bg-dark text-light":"bg-light text-dark")}>
            {name}
        </Link>
    )
}

export default Category;