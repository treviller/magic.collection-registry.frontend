import {ChangeEvent, useEffect, useMemo} from "react";
import {setSearchTerm} from "@/store/searchSlice";
import debounce from "lodash.debounce";
import {useDispatch} from "react-redux";
import {useIntl} from "react-intl";

export default function SearchBar() {
    const dispatch = useDispatch()
    const intl = useIntl()
    const eventHandler = (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchTerm(event.target.value))
    const debouncedEventHandler = useMemo(() => debounce(eventHandler, 500), [])

    useEffect(() => debouncedEventHandler.cancel())

    return (
        <input
            className="hidden lg:block flex-1 bg-blue-600 text-white placeholder:text-white rounded-3xl p-2 m-2 text-right focus-visible:border-2 focus-visible:border-red-900"
            type="text"
            placeholder={intl.formatMessage({id: 'header.search_something'})}
            onChange={debouncedEventHandler}
        />
    )
}