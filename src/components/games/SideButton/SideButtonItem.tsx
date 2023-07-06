import { useState } from "react"

type SideButtonItemProps = {
    icon: string
    iconActive: string
    onClick?: () => void
}

const SideButtonItem = ({ icon, iconActive, onClick }: SideButtonItemProps) => {
    const [currentIcon, setCurrentIcon] = useState<string>(icon)

    const handleClick = () => {
        setCurrentIcon(iconActive);

        setTimeout(() => {
            setCurrentIcon(icon);
        }, 200);

        if (onClick) {
            onClick()
        }
    }

    return (
        <button className="side-button-item" onClick={handleClick}>
            <img className='side-button-item-icon' src={currentIcon} alt='' />
        </button>
    )
}

export default SideButtonItem