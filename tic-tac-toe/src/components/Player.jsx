import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {

    const [playerName, setPlayetName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    function handleChangeName(e) {
        console.log(e);
        setPlayetName(e.target.value);
    }

    let buttonCaption = isEditing ? "Save" : "Edit";

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handleChangeName} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{buttonCaption}</button>
            </span>
        </li>
    );
}