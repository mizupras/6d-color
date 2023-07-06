import { useContext } from 'react'

import { GameSizeContext } from '../hooks/GameSize'

// import Background from './games/Background'
import Streaming from './games/Streaming/Streaming'
import BackgroundLayer from './games/BackgroundLayer/BackgroundLayer'
import Header from './games/Header/Header'
import Footer from './games/Footer/Footer'
import TableBet from './games/TableBet/TableBet'
import SideButton from './games/SideButton/SideButton'
import ActionButton from './games/ActionButton/ActionButton'

const Game = () => {
    const { orientation } = useContext(GameSizeContext)

    return (
        <>
            {/* <Background /> */}
            <Streaming />
            {orientation === 'landscape' && <BackgroundLayer />}
            <TableBet />
            <Header />
            <Footer />
            <SideButton />
            <ActionButton />

            {/* <div className='check-size'>cek size</div> */}
        </>
    )
}

export default Game