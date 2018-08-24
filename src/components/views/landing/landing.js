import React from 'react';
import './landing.css';
import ModeButtons from '../../modeButtons/modeButtons';
import LoadBar from '../../loadBar/loadBar';

const landing = () => (
        <div className="col-centered">
            <h1>TAU</h1>
            <LoadBar />
            <ModeButtons />
        </div>
);

export default landing;