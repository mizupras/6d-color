import ButtonBet from "./ButtonBet"

const MainBet = () => {
    return (
        <div className="bet-area bet-area-main">
            <ButtonBet className="bet-small">small</ButtonBet>
            <ButtonBet className="bet-odd">odd</ButtonBet>
            <ButtonBet className="bet-big">big</ButtonBet>
            <ButtonBet className="bet-even">even</ButtonBet>

            <ButtonBet className="bet-any-double">Any double</ButtonBet>
            <ButtonBet className="bet-any-triple">Any triple</ButtonBet>

            <ButtonBet className="bet-staright">staright</ButtonBet>
            <ButtonBet className="bet-staright-flush">staright-flush</ButtonBet>

            <ButtonBet className="bet-1-1">1-1</ButtonBet>
            <ButtonBet className="bet-2-2">2-2</ButtonBet>
            <ButtonBet className="bet-3-3">3-3</ButtonBet>
            <ButtonBet className="bet-4-4">4-4</ButtonBet>
            <ButtonBet className="bet-5-5">5-5</ButtonBet>
            <ButtonBet className="bet-6-6">6-6</ButtonBet>

            <ButtonBet className="bet-1-1-1">1-1-1</ButtonBet>
            <ButtonBet className="bet-2-2-2">2-2-2</ButtonBet>
            <ButtonBet className="bet-3-3-3">3-3-3</ButtonBet>
            <ButtonBet className="bet-4-4-4">4-4-4</ButtonBet>
            <ButtonBet className="bet-5-5-5">5-5-5</ButtonBet>
            <ButtonBet className="bet-6-6-6">6-6-6</ButtonBet>

            {
                [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(number => (
                    <ButtonBet
                        key={number}
                        className={`bet-${number}`}
                    >
                        {number}
                    </ButtonBet>
                ))
            }
        </div>
    )
}

export default MainBet