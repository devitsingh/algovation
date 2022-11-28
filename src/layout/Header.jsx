import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import Logo from "../assets/img/logo.png"
import "../assets/js/header.js";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header;