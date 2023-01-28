import Link from "next/link";
import {FormattedMessage} from "react-intl";
import SearchBar from "@/components/searchBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faBookBookmark, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="static bg-blue-800">
            <div className="p-4 flex flex-row justify-between content-center items-center">
                <ul className="flex flex-row justify-center">
                    <li className="p-2 hover:text-white">
                        <Link href="/"><FontAwesomeIcon icon={faBookBookmark} size="lg"/></Link>
                    </li>
                    <li className="p-2 hover:text-white">
                        <Link href="/cards"><FormattedMessage id="header.all_cards"/></Link>
                    </li>
                    <li className="p-2 hover:text-white"><FormattedMessage id="header.my_collection"/></li>
                </ul>
                <div className="flex flex-initial basis-4/12 max-w-lg content-center items-center">
                    <span className="md:block lg:hidden"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></span>
                    <SearchBar/>
                    <span className="p-2 hover:text-white">
                        <Link href="/login">
                            <FormattedMessage id="header.login"/>
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    )
}