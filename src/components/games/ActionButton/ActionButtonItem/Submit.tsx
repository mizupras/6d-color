import ActionButtonItem from '../ActionButtonItem'

import SUBMIT_ICON from '../../../../assets/images/buttons/button-submit-landscape.png'
import SUBMIT_ACTIVE_ICON from '../../../../assets/images/buttons/button-submit-active-landscape.png'

import SUBMIT_PORTRAIT_ICON from '../../../../assets/images/buttons/button-submit-portrait.png'
import SUBMIT_ACTIVE_PORTRAIT_ICON from '../../../../assets/images/buttons/button-submit-active-portrait.png'

const Submit = () => {


    return (
        <ActionButtonItem
            icon={SUBMIT_ICON}
            iconActive={SUBMIT_ACTIVE_ICON}
            iconPortrait={SUBMIT_PORTRAIT_ICON}
            iconActivePortrait={SUBMIT_ACTIVE_PORTRAIT_ICON}
            onClick={() => { }}
        />
    )
}

export default Submit