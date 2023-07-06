import RefreshBalance from './RefreshBalance'

type UserInfoProps = {
    icon: string
    value: string

    isBalance?: boolean
}

const UserInfo = ({ icon, value, isBalance }: UserInfoProps) => {
    return (
        <div className='user-info-container'>
            <img className='user-info-icon' src={icon} alt='' />

            <div className='user-info-value'>
                <span>{value}</span>
            </div>

            {
                isBalance && (
                    <RefreshBalance />
                )
            }
        </div>
    )
}

export default UserInfo