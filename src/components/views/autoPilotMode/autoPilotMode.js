import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './autoPilotMode.css';

class autoPilotMode extends Component{
    constructor(){
        super();
        this.state = {
            search: 'Red'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            search: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return(
            <div className="col-centered">
                <h1>TAU</h1>
                <p>AutoPilotMode Selected</p>
                <h2>Select Target</h2>
                <form className="targetForm" onSubmit={this.handleSubmit}>
                    <label id="labelRed">
                        <input type="radio" value="Red" checked={this.state.search === "Red"} onChange={this.handleChange} />
                        Red
                    </label>
                    <label id="labelBlue">
                        <input type="radio" value="Blue" checked={this.state.search === "Blue"} onChange={this.handleChange} />
                        Blue
                    </label>
                    <label id="labelGreen">
                        <input type="radio" value="Green" checked={this.state.search === "Green"} onChange={this.handleChange} />
                        Green
                    </label>
                    <div className="optionButtons">
                        <Link to={{
                            pathname: "/NerfThis",
                            state: {
                                search: this.state.search
                            }
                        }}>
                            <button type="submit" value="Submit" className="btn btn-success">Done</button>
                        </Link>
                        <Link to="/autoPilotHelp">
                            <button type="button" className="btn btn-info">Help</button>
                        </Link>
                        <Link to="/">
                            <button type="button" className="btn btn-danger">Exit</button>
                        </Link>
                    </div>
                </form>
                
            </div>
        );
    }
}
export default autoPilotMode;