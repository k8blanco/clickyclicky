import React from "react";
require("./style.css")

function Navbar({ message }) {
    return (
        <nav>
            <div className="nav-wrapper z-depth-3">
                <h1 className="brand-logo hide-on-med-and-down">
                    <figure className="swing">
                    <img src="./img/LlamaLogo.png" alt="Llama Logo" className="logo" height="140"></img>
                    </figure>
                </h1>
                <h3 className="right message hide-on-med-and-down">{message}</h3>
            </div>
        </nav>
    )
}

export default Navbar;