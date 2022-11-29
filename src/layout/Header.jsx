import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col } from "react-bootstrap";
import Logo from "../assets/img/logo.png"
import "../assets/js/header.js";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="headerSec">
                    <Container fluid>
                        <Col className="text-center">
                            <Link to="/" className="logoLink">
                                {/* <img src={Logo} alt="logo" className="logoImg" /> */}
                                <div className="logo-title">GAME NAME</div>
                            </Link>
                        </Col>

                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;

