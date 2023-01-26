import Card, {CardData} from "@/components/model/card";
import useSWR, {Fetcher} from "swr";
import React from "react";
import {useSelector} from "react-redux";
import {selectSearchState} from "@/store/searchSlice";
import {useRouter} from "next/router";
import {FormattedMessage} from "react-intl";

type CardsListResponse = {
    meta: string[],
    data: Array<CardData>
}

type Props = {
    searchTerm: string
}

const buildSearchUrl = (locale: string, searchTerm: string | null) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/cards?language=' + locale;

    if (searchTerm) {
        return baseUrl + '&name=' + searchTerm
    }

    return baseUrl
}

const fetcher: Fetcher<Array<CardData>, string> = (url) => fetch(url)
    .then((response) => response.json())
    .then((responseData: CardsListResponse) => responseData.data);

export default function Cards() {
    let {locale} = useRouter()

    if (locale === undefined) {
        locale = 'fr'
    }

    const searchState = useSelector(selectSearchState)

    const {
        data,
        error,
        isLoading
    } = useSWR(buildSearchUrl(locale, searchState.term), fetcher);


    if (isLoading) {
        return <p><FormattedMessage id="state.loading"/></p>
    }

    if (!data) {
        return <p><FormattedMessage id="error.no_cards_found"/></p>
    }

    if (error) {
        return <p><FormattedMessage id="error.internal_error"/></p>
    }

    return (
        <div className="flex flex-row flex-wrap justify-between w-screen">
            {data.map((card, i) => <Card data={card} key={i}/>)}
        </div>
    )
}