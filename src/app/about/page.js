import {AboutCoverSection} from "@/src/components/About/AboutCoverSection";
import Skill from "@/src/components/Skill";
import Link from "next/link";

export default function About() {
    return (
        <>
            <AboutCoverSection/>
            <Skill/>
            <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
                Have a project in mind? Reach out to me 📞
                <Link href={"/contact"} className="!underline underline-offset-1"> here</Link> from
                here and let's make it happen.
            </h2>
        </>
    )
}