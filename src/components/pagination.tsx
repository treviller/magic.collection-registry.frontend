import React, {Component, ReactNode} from "react";

type Props = {
    previousPageIndex: string | null,
    nextPageIndex: string | null,
    setPageIndex: (index: string) => void
}

function getButtonStyle(disabled: boolean): string {
    const buttonStyle = "m-3 p-3 rounded-md border-solid border-2 "
    const activeStyle = "border-blue-500 bg-blue-600 hover:text-white hover:bg-blue-800 transition-all duration-300"
    const disabledStyle = "bg-gray-600 border-gray-500"

    if (disabled) {
        return buttonStyle + disabledStyle
    }

    return buttonStyle + activeStyle
}

const Pagination: React.FC<Props> = ({previousPageIndex, nextPageIndex, setPageIndex}) => {
    const buttons: Array<ReactNode> = []

    if (previousPageIndex) {
        buttons.push(<button onClick={() => setPageIndex(previousPageIndex)}
                             className={getButtonStyle(false)}>Previous</button>)
    } else {
        buttons.push(<button disabled className={getButtonStyle(true)}>Previous</button>)
    }

    if (nextPageIndex) {
        buttons.push(<button onClick={() => setPageIndex(nextPageIndex)}
                             className={getButtonStyle(false)}>Next</button>)
    } else {
        buttons.push(<button disabled className={getButtonStyle(true)}>Next</button>)
    }

    return (
        <div className="flex flex-row justify-center">
            {buttons}
        </div>
    )
}

export default Pagination