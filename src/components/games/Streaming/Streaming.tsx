import { useState } from 'react'
import Video from './Video'

import BG_LANDSCAPE from '../../../assets/images/bg-landscape.webp'

const Streaming = () => {
    const [streamingOn] = useState(false)

    return (
        <div className="streaming">
            {
                streamingOn ? <Video /> : <img className='streaming-background' src={BG_LANDSCAPE} />
            }
        </div>
    )
}

export default Streaming