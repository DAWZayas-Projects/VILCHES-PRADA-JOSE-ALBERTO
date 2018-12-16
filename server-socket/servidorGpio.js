const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const Gpio = require('pigpio').Gpio
const coordenates = {
    "-50": 2200,
    "-49": 2184,
    "-48": 2168,
    "-47": 2152,
    "-46": 2136,
    "-45": 2120,
    "-44": 2104,
    "-43": 2088,
    "-42": 2072,
    "-41": 2056,
    "-40": 2040,
    "-39": 2024,
    "-38": 2008,
    "-37": 1992,
    "-36": 1976,
    "-35": 1960,
    "-34": 1944,
    "-33": 1928,
    "-32": 1912,
    "-31": 1896,
    "-30": 1880,
    "-29": 1864,
    "-28": 1848,
    "-27": 1832,
    "-26": 1816,
    "-25": 1800,
    "-24": 1784,
    "-23": 1768,
    "-22": 1752,
    "-21": 1736,
    "-20": 1720,
    "-19": 1704,
    "-18": 1688,
    "-17": 1672,
    "-16": 1656,
    "-15": 1640,
    "-14": 1624,
    "-13": 1608,
    "-12": 1592,
    "-11": 1576,
    "-10": 1560,
    "-9": 1544,
    "-8": 1528,
    "-7": 1512,
    "-6": 1496,
    "-5": 1480,
    "-4": 1464,
    "-3": 1448,
    "-2": 1432,
    "-1": 1416,
    null: 1400,
    "0": 1400,
    "1": 1384,
    "2": 1368,
    "3": 1352,
    "4": 1336,
    "5": 1320,
    "6": 1304,
    "7": 1288,
    "8": 1272,
    "9": 1256,
    "10": 1240,
    "11": 1224,
    "12": 1208,
    "13": 1192,
    "14": 1176,
    "15": 1160,
    "16": 1144,
    "17": 1128,
    "18": 1112,
    "19": 1096,
    "20": 1080,
    "21": 1064,
    "22": 1048,
    "23": 1032,
    "24": 1016,
    "25": 1000,
    "26": 984,
    "27": 968,
    "28": 952,
    "29": 936,
    "30": 920,
    "31": 904,
    "32": 888,
    "33": 872,
    "34": 856,
    "35": 840,
    "36": 824,
    "37": 808,
    "38": 792,
    "39": 776,
    "40": 760,
    "41": 744,
    "42": 728,
    "43": 712,
    "44": 696,
    "45": 680,
    "46": 664,
    "47": 648,
    "48": 632,
    "49": 616,
    "50": 600
}
//socketIO
//Puerto Servidor
const port = 5000;

const app = express()
//Instancia del servidor
const server = http.Server(app)
//Crear socket usando la instancia del servidor
const io = socketIO(server);

//socket:
io.on('connection', socket => {
    const sV = new Gpio(27, { mode: Gpio.OUTPUT })
    const sH = new Gpio(17, { mode: Gpio.OUTPUT })
    const ln1 = new Gpio(23, { mode: Gpio.OUTPUT })//Der
    const ln2 = new Gpio(24, { mode: Gpio.OUTPUT })//Der
    const ln3 = new Gpio(5, { mode: Gpio.OUTPUT })//Izq
    const ln4 = new Gpio(6, { mode: Gpio.OUTPUT })//Izq
    console.log('Client connected Gpio Server')
    ln1.digitalWrite(0)
    ln2.digitalWrite(0)
    ln3.digitalWrite(0)
    ln4.digitalWrite(0)
    sV.servoWrite(coordenates[0])
    sH.servoWrite(coordenates[0])
    socket.on('servoMove', function (deg, dir) {
        if (deg<=90 && deg>= 0) {
            var x = ((deg/1.8)-50)*-1
            var y = dir/2
            sH.servoWrite(coordenates[Math.round(x)])
            sV.servoWrite(coordenates[Math.round(y)])
        }
        if (deg >= 270 && deg <= 359) {
            var x = ((deg / 1.8) - 150)
            var y = 0-dir/2
            console.log('x: ', Math.round(x), ' y: ', Math.round(y))
            sH.servoWrite(coordenates[Math.round(x)])
            sV.servoWrite(coordenates[Math.round(y)])
        }
        if (deg >= 90 && deg <= 180) {
            var x = (deg / -1.8)+50
            var y = dir/2
            console.log('x: ', Math.round(x), ' y: ', Math.round(y))
            sH.servoWrite(coordenates[Math.round(x)])
            sV.servoWrite(coordenates[Math.round(y)])
        }
        if (deg >= 180 && deg <= 270) {
            var x = ((deg / -1.8) +150)*-1
            var y = 0-dir/2
            console.log('x: ', Math.round(x), ' y: ', Math.round(y))
            sH.servoWrite(coordenates[Math.round(x)])
            sV.servoWrite(coordenates[Math.round(y)])
        }
    })
    socket.on('motorMove', function (data) {
        if (data === 'stop'){
            ln1.digitalWrite(0)
            ln2.digitalWrite(0)
            ln3.digitalWrite(0)
            ln4.digitalWrite(0)
            console.log(data)
        }
        if (data === 'up'){
            ln1.digitalWrite(1)
            ln2.digitalWrite(0)
            ln3.digitalWrite(0)
            ln4.digitalWrite(1)
            console.log(data)
        }
        if (data === 'down') {
            ln1.digitalWrite(0)
            ln2.digitalWrite(1)
            ln3.digitalWrite(1)
            ln4.digitalWrite(0)
            console.log(data)
        }
        if (data === 'left') {
            ln1.digitalWrite(1)
            ln2.digitalWrite(0)
            ln3.digitalWrite(0)
            ln4.digitalWrite(0)
            console.log(data)
        }
        if (data === 'right') {
            ln1.digitalWrite(0)
            ln2.digitalWrite(0)
            ln3.digitalWrite(0)
            ln4.digitalWrite(1)
            console.log(data)
        }
    })
    // disconnect is fired when a client leaves the server
    socket.on('disconnect', function () {
        ln1.digitalWrite(0)
        ln2.digitalWrite(0)
        ln3.digitalWrite(0)
        ln4.digitalWrite(0)
        sV.servoWrite(coordenates[50])
        sH.servoWrite(coordenates[0])
        socket.disconnect()
        console.log('Client disconnected Gpio Server')
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`));