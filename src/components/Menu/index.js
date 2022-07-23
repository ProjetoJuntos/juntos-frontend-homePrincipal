import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import juntos_logo from '../../img/juntos_logo.png';
import { LoginService } from '../../services/loginService';

class Menu extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">

                {/* <img src={juntos_logo} width="90" height="90" alt="juntos"></img>  */}

                <Navbar.Brand className="px-md-2" href="#juntosTituloMenu" font-style="bold">JUNTOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">

                        <Nav.Link className="px-md-5" href="#inicio">INÍCIO</Nav.Link>
                        <Nav.Link className="px-md-5" href="#doacoes">DOAÇÕES</Nav.Link>
                        <Nav.Link className="px-md-5" href="#ranking">RANKING</Nav.Link>
                        <Nav.Link className="px-md-5" href="#quemSomos">QUEM SOMOS</Nav.Link>
                        <Nav.Link className="px-md-5" href="login">LOGIN</Nav.Link>
                        {/* <Nav.Link className="px-md-5" to="/login" onClick={LoginService.login} href="#login">LOGIN</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Menu;