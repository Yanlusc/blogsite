import Image from 'next/image'
import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hello world!
        <HomeCoverSection blogs={allBlogs}/>
        <FeaturedPosts blogs={allBlogs }/>
        <RecentPosts blogs={allBlogs}/>
    </main>
  )
}
