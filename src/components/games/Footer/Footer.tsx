import UserInfo from "./UserInfo"

import USER_ICON from '../../../assets/images/icons/user-icon.png'
import BALANCE_ICON from '../../../assets/images/icons/balance-icon.png'

const Footer = () => {
    const username = 'Username1111'
    const balance = 'Rp 999.999.999.999,00'

    return (
        <div className="footer">
            <UserInfo icon={USER_ICON} value={username} />
            <UserInfo icon={BALANCE_ICON} value={balance} isBalance />
        </div>
    )
}

export default Footer