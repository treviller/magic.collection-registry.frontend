import Link from "next/link";
import {useDispatch} from "react-redux";
import {setSearchTerm} from "@/store/searchSlice";
import {ChangeEvent, useEffect, useMemo} from "react";
import debounce from 'lodash.debounce'

export default function Header() {
    const dispatch = useDispatch();

    const eventHandler = (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchTerm(event.target.value))
    const debouncedEventHandler = useMemo(() => debounce(eventHandler, 500), [])

    useEffect(() => debouncedEventHandler.cancel())

    return (
        <header className="static bg-blue-800">
            <ul className="p-4 flex flex-row justify-center content-center items-center">
                <li className="p-2 hover:text-white"><Link href="/">Home (icon ?)</Link></li>
                <li className="p-2 hover:text-white"><Link href="/cards">All cards</Link></li>
                <li className="p-2 hover:text-white">My collection</li>
                <li><input className="bg-blue-600 text-white placeholder:text-white rounded-3xl p-2 m-2 text-right focus-visible:border-2 focus-visible:border-red-900"
                           type="text"
                           placeholder="Search Something..."
                           onChange={debouncedEventHandler}
                /></li>
                <li className="p-2 hover:text-white">Account</li>
            </ul>
        </header>
    )
}