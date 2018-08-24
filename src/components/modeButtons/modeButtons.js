import React from 'react';
import { Link } from "react-router-dom";
import './modeButtons.css';
import $ from 'jquery';
/*
function enableButtons() {
    $(":button").prop("disabled", false);
    console.log("Botones Activados");
}*/
const enableButtons = () => {
    $(":button").prop("disabled", false);
    console.log("Botones Activados");
}
//setTimeout(enableButtons, 6000);
//setTimeout(()=>enableButtons(),6000);

const modeButtons = () => { 
    setTimeout(() => enableButtons(), 6000);
    return(    
        <div className="actionContainer">
            <Link to="/AutoPilotMode">
                <button type="button" className="btn btn-info" disabled>AutoPilot Mode</button>
            </Link>
            <Link to="/PilotMode">
                <button type="button" className="btn btn-warning" disabled>Pilot Mode</button>
            </Link>
        </div>
    );
}

export default modeButtons;
