import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login/Login';
import Resets from './pages/Resets/Resets';
import CadastroUsuario from './pages/Usuario/CadastroUsuario';
import AlterarTempos from './pages/Placa/AlterarTempos';
import Empresa from './pages/Empresa/Empresa'
import { usuarioAutenticado } from '../src/services/auth'

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const Permissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
);

const rotas = ( 
    <Router>
        <div>
            <Switch>
                <Route path='/login' component={Login} />
                <Permissao path='/resets' component={Resets} />
                <Permissao path='/cadastroUsuario' component={CadastroUsuario} />
                <Permissao path='/empresa' component={Empresa} />
                <Permissao path='/alterarTempos' component={AlterarTempos} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();