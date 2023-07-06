import React from "react"

type ButtonBetProps = {
    children: React.ReactNode
    className?: string
}

const ButtonBet = ({ children, className }: ButtonBetProps) => {
    return (
        <button className={className}>
            <span>
                {children}
            </span>
        </button>
    )
}

export default ButtonBet