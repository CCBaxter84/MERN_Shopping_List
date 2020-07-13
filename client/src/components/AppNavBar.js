import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";
import { StateContextConsumer } from "./stateContext";

function AppNavBar() {
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <StateContextConsumer>
                    {context => (
                        <Container>
                            <NavbarBrand href="/">ShoppingList</NavbarBrand>
                            <NavbarToggler onClick={context.toggle}></NavbarToggler>
                            <Collapse isOpen={context.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="https://github/bradtraversy">Github
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    )}
                </StateContextConsumer>
            </Navbar>
        </div>
    )
}

export default AppNavBar;