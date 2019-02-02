import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";
import {CATEGORIES} from "../../global";

const CategoriesList = () => {
    return (
        <Nav vertical>
            <NavItem>
                <NavLink tag={RRNavLink} to="/" exact>All quotes</NavLink>
            </NavItem>

            {Object.keys(CATEGORIES).map(categoryId => (
                <NavItem key={categoryId}>
                    <NavLink
                        tag={RRNavLink}
                        to={"/quotes/" + categoryId}
                    >
                        {CATEGORIES[categoryId]}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
};

export default CategoriesList;