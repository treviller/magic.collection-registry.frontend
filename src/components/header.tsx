import Link from "next/link";
import {useDispatch} from "react-redux";
import {setSearchTerm} from "@/store/searchSlice";
import {ChangeEvent, useEffect, useMemo} from "react";
import debounce from 'lodash.debounce'
import {FormattedMessage, useIntl} from "react-intl";

export default function Header() {
    const dispatch = useDispatch()
    const intl = useIntl()

    const eventHandler = (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchTerm(event.target.value))
    const debouncedEventHandler = useMemo(() => debounce(eventHandler, 500), [])

    useEffect(() => debouncedEventHandler.cancel())

    return (
        <header className="static bg-blue-800">
            <div className="p-4 flex flex-row justify-between content-center items-center">
                <ul className="flex flex-row justify-center">
                    <li className="p-2 hover:text-white">
                        <Link href="/"><FormattedMessage id="header.home"/></Link>
                    </li>
                    <li className="p-2 hover:text-white">
                        <Link href="/cards"><FormattedMessage id="header.all_cards"/></Link>
                    </li>
                    <li className="p-2 hover:text-white"><FormattedMessage id="header.my_collection"/></li>
                </ul>
                <ul className="flex flex-row justify-center content-center items-center">
                    <li><input
                        className="bg-blue-600 text-white placeholder:text-white rounded-3xl p-2 m-2 text-right focus-visible:border-2 focus-visible:border-red-900"
                        type="text"
                        placeholder={intl.formatMessage({id: 'header.search_something'})}
                        onChange={debouncedEventHandler}
                    /></li>
                    <li className="p-2 hover:text-white"><FormattedMessage id="header.account"/></li>
                </ul>
            </div>
        </header>
    )
}