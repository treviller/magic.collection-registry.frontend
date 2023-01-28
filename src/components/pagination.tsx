import React, {Component, ReactNode} from "react";
import Button from "@/components/ui/button";

type Props = {
    previousPageIndex: string | null,
    nextPageIndex: string | null,
    setPageIndex: (index: string) => void
}

const Pagination: React.FC<Props> = ({previousPageIndex, nextPageIndex, setPageIndex}) => {
    const buttons: Array<ReactNode> = []

    if (previousPageIndex) {
        buttons.push(<Button onClick={() => setPageIndex(previousPageIndex)}>Previous</Button>)
    } else {
        buttons.push(<Button disabled={true}>Previous</Button>)
    }

    if (nextPageIndex) {
        buttons.push(<Button onClick={() => setPageIndex(nextPageIndex)}>Next</Button>)
    } else {
        buttons.push(<Button disabled={true}>Next</Button>)
    }

    return (
        <div className="flex flex-row justify-center">
            {buttons}
        </div>
    )
}

export default Pagination