import React from "react";
import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <splan className="boom">BOOM!</splan>
            <span>
                something has gone terrible wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;