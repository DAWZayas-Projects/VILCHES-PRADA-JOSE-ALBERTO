import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Modal from '../modal/modal'
import Landing from '../views/landing/landing'
import AutoPilotMode from '../views/autoPilotMode/autoPilotMode'
import PilotMode from '../views/pilotMode/pilotMode'
import './main.css'
class main extends Component {
    state = {
        showModal: false
    }

    showModalComponent = () => {
        this.setState({
            showModal: true
        })
    }

    hideModalComponent = () => {
        this.toggleFullScreen()
        this.setState({
            showModal: false
        })
    }

    componentWillMount(){
        var agent = this.detectmob()
        console.log(agent)
        if(agent){
            this.showModalComponent()
        }
    }

    detectmob() {
        if (navigator.userAgent.match(/Tablet|iPad/i)) {
            return true
        } else if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
            return true
        } else {
            return false
        }
    }

    toggleFullScreen() {
        var doc = window.document
        var docEl = doc.documentElement
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl)
        }
    }

    render() {
        return (
            <div className="row containerMain">
                <Modal show={this.state.showModal} handleClose={this.hideModalComponent}>
                    <h2>Need Enable Landscape Mode</h2>
                    <p>Go to Settings in your device and Enable AutoRotation Screen and put your device in Landscape</p>
                    <p>Got it!</p>
                </Modal>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/PilotMode" component={PilotMode} />
                    <Route path="/AutoPilotMode" component={AutoPilotMode} />
                </Switch>
            </div>
        )
    }
}
export default main