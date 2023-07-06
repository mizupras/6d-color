import { useContext } from "react"

import { GameSizeContext } from "../../../hooks/GameSize"

import BetLandscape from "./landscape/BetLandscape"
import BetPortrait from "./portrait/BetPortrait"

const TableBet = () => {
    const { orientation } = useContext(GameSizeContext)

    return (
        <div className="table-bet">
            {orientation === 'landscape' ? <BetLandscape /> : <BetPortrait />}
        </div>
    )
}

export default TableBet