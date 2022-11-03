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
                    <Col>
                        <button className="menuNav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <Row className="slideMenu">
                            <div className="slideMenuInner">
                                <ul className="slideUl">
                                    <li className="slideli">
                                        <NavLink exact to="/" className="menuItem" activeClassName="active_menu">Home</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/question" className="menuItem" activeClassName="active_menu">Question</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Row>

                    </Col>
                    <Col className="text-center">
                        <a href="/">
                            <img src={Logo} alt="logo" className="logoImg" />
                        </a>
                    </Col>
                    <Col className="text-right">
                        <button className="btn">
                            Globe
                        </button>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;