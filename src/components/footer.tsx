import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import githubIcon from "../../public/github-mark-white.svg"

export default function Footer() {
    return (
        <footer
            className="static w-full h-32 bottom-0 text-white flex items-center content-start bg-stone-700">
            <div className="p-2 container mx-auto">
                <p>Made with ❤</p>
                <span><Link
                    href="https://github.com/treviller/magic.collection-registry.frontend" target="_blank">
                    <Image className="m-2 w-7" src={githubIcon}
                           alt="Github icon redirecting to the repository of the project"/>
                </Link></span>
            </div>
        </footer>
    )
}