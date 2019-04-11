import React from "react";
import "./style.css"

function Score(props) {
    return (
        <div className="row">
            <div className="card scoreCard col s12 m4 push-m4 z-depth-3">
                <div className="card-content scoreContent">
                    <div className="row center">
                        <h4 className="score">Your Score: {props.score}</h4>
                    </div>
                    <div className="row center">
                        <h4 className="score">Top Score:  {props.topScore}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Score;