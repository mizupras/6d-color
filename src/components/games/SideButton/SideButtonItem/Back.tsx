import SideButtonItem from '../SideButtonItem'

import BACK_ICON from '../../../../assets/images/buttons/button-back.png'
import BACK_ACTIVE_ICON from '../../../../assets/images/buttons/button-back-active.png'

const Back = () => {
    return (
        <SideButtonItem
            icon={BACK_ICON}
            iconActive={BACK_ACTIVE_ICON}
            onClick={() => { }}
        />
    )
}

export default Back