import React from 'react';
import {NavLink as RRNavLink} from "react-router-dom";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

const MainMenu = () => {
    return (
        <Navbar color="dark" dark expand="md" style={{"marginBottom": "50px"}}>
            <NavbarBrand href="/">Quotes Central</NavbarBrand>
            <NavbarToggler />
            <Collapse isOpen navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/" exact>Quotes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/add-quote" >Submit new quote</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default MainMenu;