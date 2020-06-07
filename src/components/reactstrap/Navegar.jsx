import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import Navegar from '../../components/reactstrap/Navegar'
const Example = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


    const Navi = () => {
        if(props.link2 == "Cadastrar Chamado"){
            return <NavLink href="/cadastro">{props.link2}</NavLink>
        }
        return <NavLink href="/">Home</NavLink>
    }



    return (
        <div className="form">
            <Navbar color="faded" dark className="barraNavegar" >
                <NavbarBrand href="/" className="mr-auto">Gestor Simples</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            {/* Linkkk*/}

                            <Navi></Navi>

                        </NavItem>
                        <NavItem>
                            <NavLink href="">GitHub</NavLink>
                        </NavItem>

                        {/*<NavItem onClick={Usar o Link}>
                                Futuramente usar o onCLic
                                ou outra coisa pra usar o 
                                "Link" do React-Router
                                para paginas Dinamicas
                        </NavItem>*/}

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;