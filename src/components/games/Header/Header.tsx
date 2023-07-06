import { useContext } from 'react'

import { GameSizeContext } from '../../../hooks/GameSize'

import BG_HEADER_LANDSCAPE from '../../../assets/images/bg-header-landscape.webp'
import BG_HEADER_PORTRAIT from '../../../assets/images/bg-header-portrait.webp'

const Header = () => {
    const { orientation } = useContext(GameSizeContext)

    const image = orientation === 'landscape' ? BG_HEADER_LANDSCAPE : BG_HEADER_PORTRAIT

    return (
        <div className="header">
            <img className='header-background' src={image} />

            <div className='header-container'>
                {/* periode */}
                <div className='header-box'>
                    <span>ID Putaran:</span>
                    <span>123456</span>
                </div>

                {/* total taruhan */}
                <div className='header-box'>
                    <span>Taruhan Total:</span>
                    <span>Rp 999.999.999,00</span>
                </div>
            </div>
        </div>
    )
}

export default Header