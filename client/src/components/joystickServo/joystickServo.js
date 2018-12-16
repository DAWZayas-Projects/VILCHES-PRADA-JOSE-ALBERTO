import React from 'react'
import socketIOClient from 'socket.io-client'
import { Joystick } from 'react-joystick-component'

class JoystickServo extends Joystick {
    constructor() {
        super()
        this.state = {
            endpointGpio: "http://192.168.1.5:5000",
            servoDirection: 'Stopped',
            servoType: 'stop',
            servoX: null,
            servoY: null  
        }
        this.socketGpio = socketIOClient(this.state.endpointGpio)
    }
    handleMoveServo = (data) => {
        this.setState({
            servoDirection: data.direction,
            servoType: data.type,
            servoX: data.x,
            servoY: data.y
        })
        this.socketGpio.emit('servoMove', data)
    }
    handleStopServo = (data) => {
        this.setState({
            servoDirection: data.direction,
            servoType: data.type,
            servoX: data.x,
            servoY: data.y
        })
        this.socketGpio.emit('servoMove', data)
    }
    render = () => {
        return (
            <div className="joystickServoContainer">
                <Joystick size={100} baseColor="yellow" stickColor="blue" move={this.handleMoveServo.bind(this)} stop={this.handleStopServo.bind(this)}></Joystick>
            </div>
        )
    }
}

export default JoystickServo