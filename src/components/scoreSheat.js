import React from "react";

function scoreSheet(props) {   //props inside the function
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <h2>Clicky Game</h2>
            </li>
            <li>
                <a className="lossWinIndicator">Click an image to begin!</a>
            </li>
            <li>
                <a>Score</a>
            </li>
        </ul>
    );

}



export default NavTabs;
