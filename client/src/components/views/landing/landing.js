import React, { Component } from 'react'
import './landing.css'
import $ from 'jquery'
import LoadBar from '../../loadBar/loadBar'
import { Link } from "react-router-dom"

class landing extends Component {

    enableButtons = () => {
        $(":button").prop("disabled", false)
    }

    render() {
        return (
            setTimeout(() => this.enableButtons(), 6000),
            <div className="col-centered">
                <h1 className="interference">TAU</h1>
                <LoadBar />
                <div>
                    <Link to="/AutoPilotMode">
                        <button type="button" className="btn btn-info" disabled>Pilot Help</button>
                    </Link>
                    <Link to="/PilotMode">
                        <button type="button" className="btn btn-warning" disabled>Pilot Mode</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default landing
