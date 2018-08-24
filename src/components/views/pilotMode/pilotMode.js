import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './pilotMode.css';

class pilotMode extends Component {

    render() {
        return (
            <div className="col-centered">
                <h1>TAU</h1>
                <h2>Pilot Mode</h2>
                <Link to="/">
                    <button type="button" className="btn btn-info">Exit</button>
                </Link>
            </div>
        );
    }
}
export default pilotMode;