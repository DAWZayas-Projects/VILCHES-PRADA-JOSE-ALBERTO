import React from 'react';
import { Link } from "react-router-dom";
import './navigationBar.css';

const navigationBar = () => (
    <div className="navigationBarContainer">
        <Link to="/">
            <button type="button" className="btn btn-danger">Exit</button>
        </Link>
    </div>
);
export default navigationBar;