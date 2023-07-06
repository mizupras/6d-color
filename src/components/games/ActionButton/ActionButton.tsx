import Undo from "./ActionButtonItem/Undo"
import Clear from "./ActionButtonItem/Clear"
import Rebet from "./ActionButtonItem/Rebet"
import Submit from "./ActionButtonItem/Submit"

const ActionButton = () => {
    return (
        <div className="action-button">
            <Undo />
            <Clear />
            <Rebet />
            <Submit />
        </div>
    )
}

export default ActionButton