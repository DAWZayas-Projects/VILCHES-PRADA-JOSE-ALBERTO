import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './autoPilotHelp.css';

class autoPilotHelp extends Component {

    render() {
        return (
            <div className="col-centered">
                <h1>TAU</h1>
                <h2>Help</h2>
                <Link to="/AutoPilotMode">
                    <button type="button" className="btn btn-info">Back AutoPilot Mode</button>
                </Link>
            </div>
        );
    }
}
export default autoPilotHelp;