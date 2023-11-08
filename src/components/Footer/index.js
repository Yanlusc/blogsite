"use client"
import React from "react"
import {useForm} from 'react-hook-form';
import {Dribble, GitHub, LinkedinIcon, Twitter} from "@/src/components/Icons";
import Link from "next/link";


const Footer = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light  ">
            <h3 className=" mt-16 font-medium text-center capitalize text-4xl px-4">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="mt-5 px-4 text-center w-3/5 text-base">
                Subscribe to learn about new technology and updates. Join over 5000+ members
                community to stay up to date with latest news.
                © 2023 CodeBucks. All rights reserved.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 min-w-[384px] flex items-stretch bg-light p-2
            rounded mx04">
                <input type="text"
                       placeholder="enter your email" {...register("email", {required: true})}
                       className="w-full bg-transparant text-dark focus: border-dark focus: ring-0 border-b mr-2 pb-1"/>

                <input type="submit"
                       className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1 "/>
            </form>
            <div className="flex item-center mt-8">
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><LinkedinIcon
                    className="hover:scale-125 transition-all ease duration"/></a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><Twitter
                    className="hover:scale-125 transition-all ease duration"/> </a>
                <a
                    href="http://example.com"
                    className="inline-block w-6 h-6 mr-4 fill-light"
                    aria-label="Check my profile on Github"
                    target="_blank"
                >
                    <GitHub
                        className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200"/>
                </a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><Dribble
                    className="hover:scale-125 transition-all ease duration"/></a>
            </div>
            <div className="w-full mt-24 relative font-medium border border-solid border-light
            py-6 px-8 flex flex-row item-center flex flex-col md:flex-row justify-between">
                <span className="text-center" >
                    &copy; 2023 CodeBucks. All rights reserved.
                </span>
                    <Link href="/sitemap.xml">
                        sitemap.xml
                    </Link>
                    <span className="text-center">
                        Made with &hearts; by yanlu
                    </span>
            </div>


        </footer>

    )
}

export default Footer