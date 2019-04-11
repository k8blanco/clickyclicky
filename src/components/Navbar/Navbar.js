import React from "react";

function Navbar({ message, score, topScore }) {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo">Logo</h1>
                {message}
                <ul id="nav-mobile" class="right">
                    <li>SCORE: {score}</li>
                    <li>TOP SCORE: {topScore}</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;