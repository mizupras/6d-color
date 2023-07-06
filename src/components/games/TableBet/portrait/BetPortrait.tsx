import MainBet from "../components/MainBet"
import MoreBet from "../components/MoreBet"

const BetPortrait = () => {
    return (
        <>
            <MainBet />

            <div className="more-bet-title">
                <span className="more-bet-title-text">MORE BET</span>
            </div>

            <MoreBet />
        </>
    )
}

export default BetPortrait