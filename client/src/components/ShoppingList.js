import React from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StateContextConsumer } from "./stateContext";

function ShoppingList() {
    return (
        <StateContextConsumer>
            {context => (
                <Container>
                    <Button
                        color="dark"
                        style={{marginBottom: "2rem"}}
                        onClick={context.addItem}>
                        Add Item
                    </Button>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {context.items.map(({ id, name }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            style={{marginRight: "0.5rem"}}
                                            color="danger"
                                            size="sm"
                                            onClick={() => context.setItems(prev => prev.filter(item => item.id !== id))}>&times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            )}
        </StateContextConsumer>
        
    );
}

export default ShoppingList;

