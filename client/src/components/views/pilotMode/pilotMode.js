import React, { Component} from 'react'
import socketIOClient from 'socket.io-client'
import { Link } from 'react-router-dom'
import ReactNipple from 'react-nipple'
import 'react-nipple/lib/styles.css'
import './pilotMode.css'
import wall from './../../../assets/rojo.png'
class pilotMode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            endpointOpenCv: "http://192.168.4.1:4000",
            endpointGpio: "http://192.168.4.1:5000",
            show: wall,
        }
        this.socketOpenCv = socketIOClient(this.state.endpointOpenCv)
        this.socketGpio = socketIOClient(this.state.endpointGpio)
    }

    source = (valkyrie) => {
        this.setState({
            show: valkyrie
        })
    }

    streamingEmit = () => {
        console.log("Streaming started")
        this.socketOpenCv.emit('streamingConnection', false)
        this.socketOpenCv.on('image', (imagen) => {
            this.source(`data:image/jpeg;base64,${imagen}`)
        })
    }
    handleMoveMotor = (data) => {
        if (data.direction === undefined) {
            data.direction = 'stop'
            this.socketGpio.emit('motorMove', data.direction)
        } else {
            this.socketGpio.emit('motorMove', data.direction.angle)
        }
    }
    handleStopMotor = () => {
        this.socketGpio.emit('motorMove', 'stop')
    }
    handleMoveServo = (data) => {
        if (data.direction === undefined) {
            data.angle.degree = '90'
            this.socketGpio.emit('servoMove', data.angle.degree, '0')
        }
        else{
            this.socketGpio.emit('servoMove', data.angle.degree, data.distance)
        }
    }
    handleStopServo = (data) => {
        this.socketGpio.emit('servoMove', data)
    }
    componentDidMount = () => {
        this.streamingEmit()
    }
    
    exit = () => {
        this.socketOpenCv.close()
        this.socketGpio.close()
    }

    

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-centered">
                        <h3 className="headerPageMove">Move</h3>
                        <h3 className="headerPageCamera">Camera</h3>
                        <Link to="/">
                            <button type="button" className="btn btn-danger button exit" onClick={this.exit}>Exit</button>
                        </Link>
                    </div>
                    
                </div>
                <div className="">
                    <div className="joystickLeft">
                        <ReactNipple
                            style={{
                                outline: `1px dashed blue`,
                                width: '100%',
                                height: '100%'
                            }}
                            onMove={(evt, data) => this.handleMoveMotor(data)}
                            onEnd={(evt, data) => this.handleStopMotor()}
                        />
                    </div>
                    <div className="containerImagen">
                        <img id="image" className="img-responsive img-center streaming" alt="streaming" src={this.state.show}></img>
                    </div>
                    <div className="joystickRight">
                        <ReactNipple
                            style={{
                                outline: `1px dashed blue`,
                                width: '100%',
                                height: '100%'
                            }}
                            options ={{
                                size: 150,
                                fadeTime: 500
                            }}
                            onMove={(evt, data) => this.handleMoveServo(data)}
                            //onEnd={(evt, data) => this.handleStopServo()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default pilotMode