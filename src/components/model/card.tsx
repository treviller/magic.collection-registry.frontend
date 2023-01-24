import Image from "next/image";
import * as React from 'react'

export type CardData = {
    id: String
    name: String,
    language: String,
    rarity: String,
}

type Props = {
    data: CardData
}

const Card: React.FC<Props> = ({data}) => {
    return (
        <div className="flex-1 flex-col max-w-xs m-3 basis-60">
            <div className="w-full">
                <Image src="https://cards.scryfall.io/normal/front/6/d/6da045f8-6278-4c84-9d39-025adf0789c1.jpg?1562404626"
                    alt={"Picture of the card "+data.name}
                    width="488"
                    height="680"></Image>
            </div>
            <span>{data.name}</span>
        </div>
    )
}

export default Card