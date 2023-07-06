import Back from "./SideButtonItem/Back"
import Setting from "./SideButtonItem/Settings"
import Menu from "./SideButtonItem/Menu"

const SideButton = () => {
    return (
        <div className="side-button">
            <Menu />
            <Setting />
            <Back />
        </div>
    )
}

export default SideButton