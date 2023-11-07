import Logo from "@/src/components/Header/Logo";
import Link from "next/link";
import {LinkedinIcon, GitHub, Dribble, Twitter, Sun, NightIcon} from "@/src/components/Icons";
const Header = () =>{
    return(
        <header className="w-full p-4 px-10 flex items-center justify-between">
            <Logo/>
            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center
            fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
                <Link href="/" className="mx-2">Home</Link>
                <Link href="/about"className="mx-2">About</Link>
                <Link href="/contact"className="mx-2">Contact</Link>
                <button><Sun/></button>
            </nav>
            <div>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4" ><LinkedinIcon className="hover:scale-125 transition-all ease duration"/></a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4" ><Twitter className="hover:scale-125 transition-all ease duration"/> </a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4" ><GitHub className="hover:scale-125 transition-all ease duration"/></a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><Dribble className="hover:scale-125 transition-all ease duration"/></a>
            </div>
        </header>
    )

}
export default Header;