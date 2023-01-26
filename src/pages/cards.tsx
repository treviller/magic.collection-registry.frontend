import Card, {CardData} from "@/components/model/card";
import useSWR, {Fetcher} from "swr";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectSearchState} from "@/store/searchSlice";
import {useRouter} from "next/router";
import {FormattedMessage} from "react-intl";
import Pagination from "@/components/pagination";

type PaginationMeta = {
    total: number,
    next_page: string | null,
    previous_page: string | null
}

type CardsListResponse = {
    meta: PaginationMeta,
    data: Array<CardData>
}

type Props = {
    searchTerm: string
}

const buildSearchUrl = (pageIndex: string, locale: string, searchTerm: string | null) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/cards?language=' + locale + '&page=' + pageIndex;

    if (searchTerm) {
        return baseUrl + '&name=' + searchTerm
    }

    return baseUrl
}

const fetcher: Fetcher<CardsListResponse, string> = (url) => fetch(url)
    .then((response) => response.json())

export default function Cards() {
    const [pageIndex, setPageIndex] = useState('1')
    let {locale} = useRouter()

    if (locale === undefined) {
        locale = 'fr'
    }

    const searchState = useSelector(selectSearchState)

    const {
        data,
        error,
        isLoading
    } = useSWR(buildSearchUrl(pageIndex, locale, searchState.term), fetcher);


    if (isLoading) {
        return <p><FormattedMessage id="state.loading"/></p>
    }

    if (error || !data) {
        return <p><FormattedMessage id="error.internal_error"/></p>
    }

    if (!data.data) {
        return <p><FormattedMessage id="error.no_cards_found"/></p>
    }


    return (
        <>
            <div className="flex flex-row flex-wrap justify-between w-100%">
                {data.data.map((card, i) => <Card data={card} key={i}/>)}
            </div>
            <Pagination previousPageIndex={data.meta.previous_page} nextPageIndex={data.meta.next_page}
                        setPageIndex={setPageIndex}/>
        </>
    )
}