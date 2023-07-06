import React, { useState, useEffect, useRef, createContext } from 'react'

export type Orientation = 'landscape' | 'portrait'

export type GameSizeContextType = {
    orientation: Orientation
}

const STANDARD_SIZES = {
    landscape: { width: 2160, height: 1080, ratio: 18 / 9 },
    portrait: { width: 1080, height: 2160, ratio: 9 / 18 }
}

const getViewportSize = () => {
    return window.visualViewport
        ? { width: window.visualViewport.width, height: window.visualViewport.height }
        : { width: 0, height: 0 }
}

const getOrientation = (width: number, height: number): Orientation => {
    return width >= height ? 'landscape' : 'portrait'
}

export const GameSizeContext = createContext<GameSizeContextType>({
    orientation: 'landscape'
})

type Props = {
    children: React.ReactNode
}

const GameSizeProvider = ({ children }: Props) => {
    const [currentOrientation, setOrientation] = useState<Orientation>('landscape')

    const gameAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                const { width, height } = getViewportSize()
                const orientation = getOrientation(width, height)
                const { width: standardWidth, height: standardHeight, ratio } = STANDARD_SIZES[orientation]

                const newWidth = Math.min(width, height * ratio)
                const newHeight = newWidth / ratio

                const scale = newWidth / standardWidth

                const element = gameAreaRef.current
                if (element) {
                    element.style.width = `${newWidth}px`
                    element.style.height = `${newHeight}px`
                    element.style.fontSize = `${scale}em`
                }

                setOrientation(orientation)

                const root = document.documentElement
                if (root) {
                    root.style.setProperty("--scale-game", `scale(${scale})`)
                    root.style.setProperty("--width-game", `${standardWidth}px`)
                    root.style.setProperty("--height-game", `${standardHeight}px`)
                }
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('orientationchange', handleResize)
        }
    }, [])

    return (
        <div className={`app ${currentOrientation}`}>
            <div className='game-area' ref={gameAreaRef} >
                <GameSizeContext.Provider value={{ orientation: currentOrientation }}>
                    {children}
                </GameSizeContext.Provider>
            </div>
        </div>
    )
}

export default GameSizeProvider