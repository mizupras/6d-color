import { useState, useRef, useEffect } from "react"

import BG_LANDSCAPE from '../../../assets/images/bg-landscape.webp'

const url_streaming = 'https://cam4.idnstreams.com/?app=SDI&name=XD_480P'

const Video = () => {
    const [loading, setLoading] = useState(true)

    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const handleLoad = () => {
            console.log('iframe loaded')

            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }

        iframeRef.current?.addEventListener('load', handleLoad)

        return () => {
            iframeRef.current?.removeEventListener('load', handleLoad)
        }

    }, [])

    const loadingVideo = (
        <div className="loading-video">
            <img className='loading-video-background' src={BG_LANDSCAPE} />

            <div className="loading-video-content">
                <span className="loading-video-text">LOAD VIDEO...</span>
            </div>
        </div>
    )

    return (
        <>
            {
                loading && loadingVideo
            }

            <iframe
                ref={iframeRef}
                className={`streaming-iframe${!loading ? ' show' : ''}`}
                src={url_streaming}
            />
        </>
    )
}

export default Video