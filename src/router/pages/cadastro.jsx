import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navegar from '../../components/reactstrap/Navegar'
import '../../components/reactstrap/TabelaSt.css';
import FormCadastro from '../../components/reactstrap/FormCadastro'
import '../../components/reactstrap/TabelaSt.css';
export default class cadastro extends Component {
    render() {
        return (
            <div>
                <div className="navegacao">

                    <Navegar link1={"home"}></Navegar>

                </div>
     
                <div className="forma">

                    <FormCadastro></FormCadastro>

                </div>
               
            </div>
        )
    }
}
