import React from 'react';
import './loadBar.css';

const loadBar = () => {
    return(
        <div className="barContainer">
            <div id="progress">
                <div id="progressText"></div>
            </div>
        </div>
    );
}

export default loadBar;