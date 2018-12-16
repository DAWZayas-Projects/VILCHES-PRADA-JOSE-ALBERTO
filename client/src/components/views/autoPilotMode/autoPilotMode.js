import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './autoPilotMode.css';

class autoPilotMode extends Component{
    render() {
        return(
            <div className="col-centered">
                <h1>TAU</h1>
                <p>To control Tau go to Pilot Mode. At the center of the screen you can watch Tau's Webcam</p>
                <p>The LEFT column in Blue Color: If you touch the joystick, it will launch. Now Tau move in the direction of the Joystick</p>
                <p>The RIGHT column in Blue Color: If you touch the joystick, it will launch. Now the Webcam will move in the same direction as the Joystick</p>
                <Link to="/">
                    <button type="button" className="btn btn-warning button exit" onClick={this.exit}>Go Back</button>
                </Link>
            </div>
        );
    }
}
export default autoPilotMode;