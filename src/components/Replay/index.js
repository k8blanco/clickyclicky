import React from "react";
require ("./style.css")

function Replay(props) {
    return (
    <div id="replay">
        <div className="modal-content center-align">
            <h4>Game Over!</h4>
        </div>
        <div className="modal-footer center-align">
            <button onClick={props.reset} className="waves-effect waves-light btn">Play Again</button>
        </div>
    </div>
    )
}

export default Replay;