import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";
import Logo from "../assets/img/logo.png"
import "../assets/js/header.js";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const SlideMenu = event => {
            let btn = event.currentTarget;
            let Nav = document.querySelector(".slideMenu");
            btn.classList.toggle("active");
            Nav.classList.toggle("active");
    }

    return (
        <>
            <Navbar className="headerSec">
                <Container fluid>
                    <Col>
                        <button className="menuNav" onClick={SlideMenu}>
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
                                        <NavLink exact to="/social" className="menuItem" activeClassName="active_menu">Social</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/privacy" className="menuItem" activeClassName="active_menu">Privacy</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/faq" className="menuItem" activeClassName="active_menu">FAQ's</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/terms-&-conditions" className="menuItem" activeClassName="active_menu">Terms & Conditions</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/about" className="menuItem" activeClassName="active_menu">About us</NavLink>
                                    </li>
                                    <li className="slideli">
                                        <NavLink exact to="/contact" className="menuItem" activeClassName="active_menu">Contact us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Row>

                    </Col>
                    <Col className="text-center">
                        <Link to="/">
                            <img src={Logo} alt="logo" className="logoImg" />
                        </Link>
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