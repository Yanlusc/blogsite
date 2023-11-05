import {compareDesc, parseISO} from "date-fns";

export const cx = (...classNames) => classNames.filter(item => (Boolean(item))).join(" ")

export const sortBlog = (blogs) => {
    return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
}