import Card, {CardData} from "@/components/model/card";
import useSWR, {Fetcher} from "swr";
import React from "react";
import {useSelector} from "react-redux";
import {selectSearchState} from "@/store/searchSlice";

type CardsListResponse = {
    meta: string[],
    data: Array<CardData>
}

type Props = {
    searchTerm: string
}

const fetcher: Fetcher<Array<CardData>, string> = (url) => fetch(url)
    .then((response)=> response.json())
    .then((responseData: CardsListResponse) => responseData.data);

export default function Cards() {
    const searchTerm = useSelector(selectSearchState)

    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_BASE_URL+'/cards?name='+searchTerm+'&language=fr', fetcher);

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(!data) {
        return <p>No cards found</p>
    }

    if(error) {
        return <p>Oups, an error occurred</p>
    }

    return (
        <div className="flex flex-row flex-wrap justify-between w-screen">
            {data.map((card, i) => <Card data={card} key={i}/>)}
        </div>
    )
}