import Card, {CardData} from "@/components/model/card";
import {useEffect, useState} from "react";
import useSWR, {Fetcher} from "swr";

type CardsListResponse = {
    meta: string[],
    data: Array<CardData>
}

const fetcher: Fetcher<Array<CardData>, string> = (url) => fetch(url)
    .then((response)=> response.json())
    .then((responseData: CardsListResponse) => responseData.data);
export default function Cards() {
    const { data, error, isLoading  } = useSWR('http://localhost:8080/api/cards?name=Chandra&language=fr', fetcher);

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(!data) {
        return <p>No cards found</p>
    }

    if(error) {
        return <p>Oups, an error occurred</p>
    }

    console.log(data)
    return (
        <div className="flex flex-row flex-wrap justify-between w-screen">
            {data.map((card, i) => <Card data={card} key={i}/>)}
        </div>
    )
}