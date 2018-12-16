import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line
import $ from 'jquery'
// eslint-disable-next-line
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
// eslint-disable-next-line
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import './assets/index.css'

render(
    <Router>
        <App />
    </Router>,
document.getElementById("root")
)