import { useState, useContext, useEffect } from "react"

import { GameSizeContext } from "../../../hooks/GameSize"

type ActionButtonItemProps = {
    icon: string
    iconActive: string
    iconPortrait: string
    iconActivePortrait: string

    onClick?: () => void
}

const ActionButtonItem = ({ icon, iconActive, iconPortrait, iconActivePortrait, onClick }: ActionButtonItemProps) => {
    const { orientation } = useContext(GameSizeContext)

    const [normalIcon, setNormalIcon] = useState('')
    const [activeIcon, setActiveIcon] = useState('')

    const [currentIcon, setCurrentIcon] = useState<string>(icon)

    useEffect(() => {

    }, [])

    useEffect(() => {
        const setIcon = orientation === 'landscape' ? icon : iconPortrait
        const setIconActive = orientation === 'landscape' ? iconActive : iconActivePortrait

        setNormalIcon(setIcon)
        setActiveIcon(setIconActive)
        setCurrentIcon(setIcon)
    }, [orientation])

    const handleClick = () => {
        setCurrentIcon(activeIcon);

        setTimeout(() => {
            setCurrentIcon(normalIcon);
        }, 200);

        if (onClick) {
            onClick()
        }
    }

    return (
        <button className="action-button-item" onClick={handleClick}>
            <img className="action-button-item-icon" src={currentIcon} />
        </button>
    )
}

export default ActionButtonItem