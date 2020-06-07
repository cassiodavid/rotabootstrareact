import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tabela from '../../components/reactstrap/Tabela'
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import '../../components/reactstrap/TabelaSt.css';
import Navegar from '../../components/reactstrap/Navegar'
import JumboT from '../../components/reactstrap/JumboT'
export default class home extends Component {
    /*---------------------------
    state = {
        dado: []
    };

    componentDidMount() {
        fetch('/localhost:3002/clientes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dado: res
                });
            });
    }

    */


    render() {

        //---------------- DATA HEAD sao apenas TESTE Criar as Funçoes REST get-----



        const data = [
            { id: 1, name: 'Jose', Setor: 'Administrativo', Descri: 'Impressora Nao Liga' },
            { id: 2, name: 'Maria', Setor: 'RH', Descri: 'Caiu a NET Ahhh' },
            { id: 3, name: 'Julia', Setor: 'Suporte', Descri: 'PC nao Liga' }

        ]

        const head = {
            id: 'Ident.',
            name: 'Nome',
            Setor: 'Setor',
            Descri: 'Descrição'

        }

        //---------------------------------------------------------------


        return (
            <div className="tudo">

                <div className="navegacao">

                    <Navegar link2={"Cadastrar Chamado"} />

                </div>


                <div className='Conte'>
                    <Container className='contei'>
                        <Tabela data={data} head={head}> </Tabela>
                    </Container>
                    
                </div>

                {/*<Link to="/cadastro">Ir para a página Cadastro</Link>*/}
                
                
            </div>
        )
    }
}

