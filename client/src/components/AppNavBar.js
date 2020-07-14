import React, { useContext } from "react";
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
import { ItemsContext } from "./ItemsContext";

function AppNavBar() {
    const { toggle, isOpen } = useContext(ItemsContext);
    return (
        <Navbar color="dark" dark expand="sm" className="mb-5"> 
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={toggle}></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github/bradtraversy">Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavBar;