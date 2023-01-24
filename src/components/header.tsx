import Link from "next/link";

export default function Header() {
    return (
        <header className="static bg-blue-800">
            <ul className="p-4 flex flex-row justify-center content-center items-center">
                <li className="p-2 hover:text-white"><Link href="/">Home (icon ?)</Link></li>
                <li className="p-2 hover:text-white"><Link href="/cards">All cards</Link></li>
                <li className="p-2 hover:text-white">My collection</li>
                <li><input className="bg-blue-600 text-white placeholder:text-white rounded-3xl p-2 m-2 text-right focus-visible:border-2 focus-visible:border-red-900"
                           type="text"
                           placeholder="Search Something..."
                /></li>
                <li className="p-2 hover:text-white">Account</li>
            </ul>
        </header>
    )
}