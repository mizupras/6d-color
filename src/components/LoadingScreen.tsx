import { useContext } from 'react'

import { GameSizeContext } from '../hooks/GameSize'

import BG_LOADING_LANDSCAPE from '../assets/images/bg-loading-landscape.webp'
import BG_LOADING_PORTRAIT from '../assets/images/bg-loading-portrait.webp'

const LoadingScreen = () => {
    const { orientation } = useContext(GameSizeContext)

    const bgLoadingImage = orientation === 'landscape' ? BG_LOADING_LANDSCAPE : BG_LOADING_PORTRAIT

    return (
        <div className="loading-screen">
            <img className="loading-screen-background" src={bgLoadingImage} />
            <span className='loading-screen-text'>Loading...</span>
        </div>
    )
}

export default LoadingScreen