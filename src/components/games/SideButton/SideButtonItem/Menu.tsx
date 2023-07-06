import SideButtonItem from '../SideButtonItem'

import MENU_ICON from '../../../../assets/images/buttons/button-menu.png'
import MENU_ACTIVE_ICON from '../../../../assets/images/buttons/button-menu-active.png'

const Menu = () => {
    return (
        <SideButtonItem
            icon={MENU_ICON}
            iconActive={MENU_ACTIVE_ICON}
            onClick={() => { }}
        />
    )
}

export default Menu