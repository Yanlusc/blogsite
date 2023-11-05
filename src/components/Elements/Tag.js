import Link from "next/link";
import {cx} from "@/src/utils";

 export const Tag =({link="#", name,...props}) =>{
    return(
        <Link href={link} className={cx("inline-block py-3 px-10 bg-dark text-white " +
            "rounded-full capitalize font-semibold border border-solid border-light hover:sca ",props.className)}>
            {name}
        </Link>
    )
}