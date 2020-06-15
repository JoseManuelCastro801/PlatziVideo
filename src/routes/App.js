import React from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import PLayer from '../components/Player'
import Layout from '../components/Layout'
import Player from '../components/Player'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/Player/:id" component={Player}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;