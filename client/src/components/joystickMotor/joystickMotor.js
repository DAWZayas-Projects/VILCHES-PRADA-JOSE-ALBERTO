import React from 'react'
import socketIOClient from 'socket.io-client'
import ReactNipple from 'react-nipple'
import 'react-nipple/lib/styles.css'

class JoystickMotor extends ReactNipple {
    constructor() {
        super()
        this.state = {
            endpointGpio: "http://192.168.1.5:5000",
            motorDirection: 'Stopped'
        }
        this.socketGpio = socketIOClient(this.state.endpointGpio)
    }
    handleMoveMotor = (evt, data) => {
        this.setState({
            motorDirection: data.direction.angle
        })
        this.socketGpio.emit('motorMove', data.direction.angle)
    }
    handleStopMotor = () => {
        var data = 'stop'
        this.setState({
            motorDirection: data
        })
        this.socketGpio.emit('motorMove', data)
    }
    render = () => {
        return (
            <div>
                <ReactNipple
                    options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
                    
                    style={{
                        outline: `1px dashed red`,
                        width: 150,
                        height: 150
                    }}
                    onMove={(evt, data) => this.handleMoveMotor(evt, data)}
                    onDestroy={this.handleStopMotor}
                />
            </div>
        )
    }
}

export default JoystickMotor