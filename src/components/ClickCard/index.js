import React from "react";
require("./style.css")

function ClickCard(props) {
    return (
        // <div className="col s4">
        <div className="card">
            <div className="card-content center">              
                <img 
                    src={props.image}
                    alt={props.name}
                    onClick={() => props.handleClick(props.name)}
                />      
            </div>
        </div>
        // </div>
    )
}

export default ClickCard;