const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
//Puerto Servidor
const port = 4000;

const app = express()
//Instancia del servidor
const server = http.Server(app)
//Crear socket usando la instancia del servidor
const io = socketIO(server);
const cv = require('opencv4nodejs')
//FPS
const FPS = 24;
//OPENCV
var wCap = new cv.VideoCapture(0)
//TAMAÑO CAPTURA
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 320)
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 240)

//socket:
io.on('connection', socket => {
    console.log('Client connected')
    socket.on('streamingConnection', function (data) {
        if(!data){
            console.log("Starting Streaming Service")
            intervalMode = setInterval(() => {
                frame = wCap.read()
                imagen = cv.imencode('.jpg', frame).toString('base64')
                socket.emit('image', imagen)
            }, 1000/FPS)
        }
    }
    )
    // disconnect se lanza cuando un cliente abandona el servidor
    socket.on('disconnect', function () {
        console.log('Client disconnected')
        process.exit()
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
