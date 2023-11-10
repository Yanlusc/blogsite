import {makeSource, defineDocumentType} from '@contentlayer/source-files'
import readingTime from "reading-time";
import remarkGfm from 'https://esm.sh'
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


import GitHubSlugger from "github-slugger"


const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/**/*.mdx',
    contentType:"mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishedAt: {
            type: "date",
            required: true,
        },
        updatedAt: {
            type: "date",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },

        image: {
            type: "image",
            required: true,
        },
        isPublished: {
            type: "boolean",
            default: true,
        },
        author: {
            type: "string",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
        }
    },

    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
        readingTime: {
            type: "json",
            resolve: (doc) => readingTime(doc.body.raw)
        },
        toc:{
            type: "json",
            resolve: async (doc) => {

                const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GitHubSlugger;
                const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
                    const flag = groups?.flag;
                    const content = groups?.content;

                    return {
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug(content) : undefined
                    }

                })


                return headings;
            }
        }
    },
}));


const codeOptions ={
    theme: 'github-dark'

}


export default makeSource({
    /* options */
    contentDirPath: "content",
    documentTypes: [Blog],
    /*it doesn't work*/
    mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}]] }
});