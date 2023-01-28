import React from "react";

type Props = {
    children: string
    disabled?: boolean,
    onClick?: () => void
    type?: 'submit' | 'reset' | 'button'
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

const Button: React.FC<Props> = ({children, disabled = false, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled}
                className={getButtonStyle(disabled)}>{children}</button>
    )
}

export default Button