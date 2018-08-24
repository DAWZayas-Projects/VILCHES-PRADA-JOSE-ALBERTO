import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import './nerfThis.css';

class nerfThis extends Component {

    componentDidMount(){
        const recieveTarget = this.props.location.state.search
        console.log(recieveTarget);
    }

    render() {
        return (
            <div className="col-centered">
                <h1>TAU</h1>
                <h2>NERF THIS</h2>
            </div>
        );
    }
}
export default nerfThis;