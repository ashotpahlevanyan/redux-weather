import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux';
import Layout from "./components/Layout"
import store from './store';
// import '../../node_modules/weathericons/css/weather-icons.min.css';
// import '../../node_modules/weathericons/css/weather-icons-wind.css';
 //Webpack can import CSS files too!!

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<Layout />
</Provider>, app);
