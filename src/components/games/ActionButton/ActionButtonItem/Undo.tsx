import ActionButtonItem from '../ActionButtonItem'

import UNDO_ICON from '../../../../assets/images/buttons/button-undo-landscape.png'
import UNDO_ACTIVE_ICON from '../../../../assets/images/buttons/button-undo-active-landscape.png'

import UNDO_PORTRAIT_ICON from '../../../../assets/images/buttons/button-undo-portrait.png'
import UNDO_ACTIVE_PORTRAIT_ICON from '../../../../assets/images/buttons/button-undo-active-portrait.png'

const Undo = () => {
    return (
        <ActionButtonItem
            icon={UNDO_ICON}
            iconActive={UNDO_ACTIVE_ICON}
            iconPortrait={UNDO_PORTRAIT_ICON}
            iconActivePortrait={UNDO_ACTIVE_PORTRAIT_ICON}
            onClick={() => { }}
        />
    )
}

export default Undo