import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import './pages/Fundo.css'
import '../components/reactstrap/TabelaSt.css';

 
 export default class Routes extends Component {
     render() {
         return (
             <div className="Fundo">
                 <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cadastro" component={Cadastro} />
                    </Switch>
                 </BrowserRouter>
                <div className="cassin">
                    <a>@Cassin</a>
                </div>

             </div>
         )
     }
 }
 
