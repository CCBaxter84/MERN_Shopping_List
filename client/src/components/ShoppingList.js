import React, { useContext } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ItemsContext } from "./ItemsContext";

function ShoppingList() {
    const { items, setItems } = useContext(ItemsContext);

    return ( 
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    style={{marginRight: "0.5rem"}}
                                    color="danger"
                                    size="sm"
                                    onClick={() => setItems(prev => prev.filter(item => item.id !== id))}>&times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ShoppingList;

