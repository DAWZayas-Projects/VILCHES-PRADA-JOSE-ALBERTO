#VILCHES-PRADA-JOSE-ALBERTO

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm start

##Proyecto TAU##

#Lenguajes Necesarios:

Python, Node.js, React.js

Con implementacion de OpenCv para el reconocimiento de imagen.

Implementado en Raspberry Pi 2B+ junto a Arduino Nano V3

#Hardware Necesario:

Rasberry Pi 3B+ x1

Arduino Nano V3 x1

Motor con reductora x2

Hmc5883l x2 (Magnetometro)

Servo x3

Doble Puente H (L298N) x1

Webcam x1

Tarjeta MicroSd 32Gb Clase 10 x1

Cableado variado

Plataforma para montaje x2

Fuente de Alimentacion Modular para pruebas x1

Breadboard x2

Sensor HC-SR04 x1

Sensor laser x2 (Opcional)

Led x2

Buzzer x1

Resistencias Varias

PowerBank >5000mA 5V/2Amp Salida x2

Bateria 9v x 1

Cable Usb x2

Chasis robot tortuga de dos ruedas y dos bandejas (posible ampliacion a tres)

Blindaje mediante material ferroso para evitar interferencias electromagneticas entre los magnetometros y los demas componentes (motores principalmente)
Software Necesario:

Raspbian Lite (Sin entorno grafico)-(Linux Debian)

Atom / VS Code

Chrome / FireFox
Actualizacion de estado:

Se ha conectado y leido informacion entre Raspberry Pi y el modulo Hmc5883l mediante i2c (en proceso de calibrado)

Se ha conectado y leido informacion entre Arduino y el modulo Hmc5883l mediante i2c (en proceso de calibrado)

Se ha conectado e intercambiado informacion entre Arduino y Raspberry Pi

Se ha conectado y controlado tres servos desde Raspberry Pi mediante Python y JavaScript (independientemente)

Se ha iniciado OpenCv en reconocimiento de tonalidades cromaticas (en desarrollo)

Se ha iniciado el desarrollo de la parte Node.js + Angular.js

Se ha creado una App con Angular

Error encontrado, librerias de Robotica no compatibles con Angular, tras dos semanas de intento se migra la app a React

Se ha iniciado el desarrollo de la parte Node.js + React.js

Se inician las pruebas de compatibilidad de librerias de Robotica con Node.js + React.js

Se ha cambiado la Rasberry 2b+ por una Rasberry 3b+ aumentando el rendimiento y disminuyendo el consumo de energia, tamaño y peso al prescindir del adaptador Wifi necesario para el modelo 2b+

Tras dos semanas:
Se ha concluido el Websocket con OpenCv en Node para que haga Streaming de video de la WebCam de Tau, (100% funcional a 30FPS y sin lag)

En breve se ampliara este Readme con mas informacion y avances
