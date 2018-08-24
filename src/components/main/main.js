import React from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from '../views/landing/landing';
import AutoPilotMode from '../views/autoPilotMode/autoPilotMode';
import PilotMode from '../views/pilotMode/pilotMode';
import NerfThis from '../views/nerfThis/nerfThis';
import AutoPilotHelp from '../views/autoPilotHelp/autoPilotHelp';
import './main.css';

/*
class main extends Component {
    render () {
        return (
            <Landing />
        );
    }
}

if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}
*/

const main = () => (
    <main>
        <div className="row">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/PilotMode" component={PilotMode} />
                <Route path="/AutoPilotMode" component={AutoPilotMode} />
                <Route path="/NerfThis" component={NerfThis} />
                <Route path="/AutoPilotHelp" component={AutoPilotHelp} />
            </Switch>
        </div>
    </main>
);
export default main;