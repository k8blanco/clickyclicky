import React from "react";
import "./style.css"

function Score(props) {
    return (
        <div className="row score">
            <div className="col s1 m6 right-align">
                <h4 className="inline">
                    Score:
                </h4>
                <h4 className="inline ml-2">
                    {props.score}
                </h4>
            </div>
            <div className="col s1 m6">
                <h4 className="inline">
                    Top Score:
                </h4>
                <h4 className="inline ml-2">
                    {props.topScore}
                </h4>
            </div>
        </div>
    )
}

export default Score;