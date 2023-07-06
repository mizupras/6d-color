import { useState } from "react"

import MainBet from "../components/MainBet"
import MoreBet from "../components/MoreBet"

const BetLandscape = () => {
    const [mainActive, setMainActive] = useState(true)

    return (
        <>
            {
                mainActive ? <MainBet /> : <MoreBet />
            }

            <button className="button-show-more-bet" onClick={() => setMainActive(!mainActive)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="button-show-more-bet-icon">
                    {
                        mainActive ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        )
                    }
                </svg>
            </button>
        </>
    )
}

export default BetLandscape