import ActionButtonItem from '../ActionButtonItem'

import REBET_ICON from '../../../../assets/images/buttons/button-rebet-landscape.png'
import REBET_ACTIVE_ICON from '../../../../assets/images/buttons/button-rebet-active-landscape.png'

import REBET_PORTRAIT_ICON from '../../../../assets/images/buttons/button-rebet-portrait.png'
import REBET_ACTIVE_PORTRAIT_ICON from '../../../../assets/images/buttons/button-rebet-active-portrait.png'

const Rebet = () => {
    return (
        <ActionButtonItem
            icon={REBET_ICON}
            iconActive={REBET_ACTIVE_ICON}
            iconPortrait={REBET_PORTRAIT_ICON}
            iconActivePortrait={REBET_ACTIVE_PORTRAIT_ICON}
            onClick={() => { }}
        />
    )
}

export default Rebet