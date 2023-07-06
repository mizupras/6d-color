import SideButtonItem from '../SideButtonItem'

import SETTINGS_ICON from '../../../../assets/images/buttons/button-settings.png'
import SETTINGS_ACTIVE_ICON from '../../../../assets/images/buttons/button-settings-active.png'

const Settings = () => {
    return (
        <SideButtonItem
            icon={SETTINGS_ICON}
            iconActive={SETTINGS_ACTIVE_ICON}
            onClick={() => { }}
        />
    )
}

export default Settings