import ActionButtonItem from '../ActionButtonItem'

import CLEAR_ICON from '../../../../assets/images/buttons/button-clear-landscape.png'
import CLEAR_ACTIVE_ICON from '../../../../assets/images/buttons/button-clear-active-landscape.png'

import CLEAR_PORTRAIT_ICON from '../../../../assets/images/buttons/button-clear-portrait.png'
import CLEAR_ACTIVE_PORTRAIT_ICON from '../../../../assets/images/buttons/button-clear-active-portrait.png'

const Clear = () => {
    return (
        <ActionButtonItem
            icon={CLEAR_ICON}
            iconActive={CLEAR_ACTIVE_ICON}
            iconPortrait={CLEAR_PORTRAIT_ICON}
            iconActivePortrait={CLEAR_ACTIVE_PORTRAIT_ICON}
            onClick={() => { }}
        />
    )
}

export default Clear