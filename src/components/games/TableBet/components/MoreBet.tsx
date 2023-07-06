import ButtonBet from "./ButtonBet"

const MoreBet = () => {
    return (
        <div className="bet-area bet-area-more">
            <ButtonBet className="bet-3-blue">bet-3-blue</ButtonBet>
            <ButtonBet className="bet-3-red">bet-3-red</ButtonBet>
            <ButtonBet className="bet-3-yellow">bet-3-yellow</ButtonBet>

            <ButtonBet className="bet-2-blue">bet-2-blue</ButtonBet>
            <ButtonBet className="bet-2-red">bet-2-red</ButtonBet>
            <ButtonBet className="bet-2-yellow">bet-2-yellow</ButtonBet>

            <ButtonBet className="bet-1-blue">bet-1-blue</ButtonBet>
            <ButtonBet className="bet-1-red">bet-1-red</ButtonBet>
            <ButtonBet className="bet-1-yellow">bet-1-yellow</ButtonBet>

            <ButtonBet className="bet-any-triple-color">any-triple-color</ButtonBet>
            <ButtonBet className="bet-any-double-color">any-double-color</ButtonBet>
            <ButtonBet className="bet-3-star">3-star</ButtonBet>

            <ButtonBet className="bet-1-1-blue">1-1-blue</ButtonBet>
            <ButtonBet className="bet-2-2-blue">2-2-blue</ButtonBet>
            <ButtonBet className="bet-3-3-blue">3-3-blue</ButtonBet>
            <ButtonBet className="bet-4-4-blue">4-4-blue</ButtonBet>
            <ButtonBet className="bet-5-5-blue">5-5-blue</ButtonBet>
            <ButtonBet className="bet-6-6-blue">6-6-blue</ButtonBet>

            <ButtonBet className="bet-1-1-red">1-1-red</ButtonBet>
            <ButtonBet className="bet-2-2-red">2-2-red</ButtonBet>
            <ButtonBet className="bet-3-3-red">3-3-red</ButtonBet>
            <ButtonBet className="bet-4-4-red">4-4-red</ButtonBet>
            <ButtonBet className="bet-5-5-red">5-5-red</ButtonBet>
            <ButtonBet className="bet-6-6-red">6-6-red</ButtonBet>

            <ButtonBet className="bet-1-1-yellow">1-1-yellow</ButtonBet>
            <ButtonBet className="bet-2-2-yellow">2-2-yellow</ButtonBet>
            <ButtonBet className="bet-3-3-yellow">3-3-yellow</ButtonBet>
            <ButtonBet className="bet-4-4-yellow">4-4-yellow</ButtonBet>
            <ButtonBet className="bet-5-5-yellow">5-5-yellow</ButtonBet>
            <ButtonBet className="bet-6-6-yellow">6-6-yellow</ButtonBet>

            {
                [1, 2, 3, 4, 5, 6].map(number => (
                    <ButtonBet
                        key={number}
                        className={`bet-on-${number}`}
                    >{number}</ButtonBet>
                ))
            }

            <span className="bet-footer">on one dice</span>
            <span className="bet-footer">on two dice</span>
            <span className="bet-footer">on three dice</span>
        </div>
    )
}

export default MoreBet