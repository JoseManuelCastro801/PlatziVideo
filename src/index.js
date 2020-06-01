//Configuracion de React , este es el primer archivo detectado
import React from 'react'
import ReactDOM from 'react-dom'
//Se importa el componente Home de la carpeta .\components\
import App from './routes/App'
import { Provider } from 'react-redux'
import { crateStore } from 'redux'

//render recibe dos parametro , unos es el componente (ej : Home) y el otro indica donde lo va representar
ReactDOM.render(
    <Provider>
        <App/>
    </Provider>
    , document.getElementById('app')
);