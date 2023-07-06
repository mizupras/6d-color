import { useContext } from 'react'

import { GameSizeContext } from '../../hooks/GameSize'

import BG_LANDSCAPE from '../../assets/images/bg-landscape.webp'
import BG_PORTRAIT from '../../assets/images/bg-portrait.webp'

const Background = () => {
    const { orientation } = useContext(GameSizeContext)

    const image = orientation === 'landscape' ? BG_LANDSCAPE : BG_PORTRAIT

    return (
        <img className='background-game' src={image} />
    )
}

export default Background