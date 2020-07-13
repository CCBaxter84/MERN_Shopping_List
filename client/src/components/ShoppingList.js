import React, { useState } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

function ShoppingList() {
    const [ items, setItems ] = useState([
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Water"},
        {id: uuid(), name: "Steak"},
        {id: uuid(), name: "Eggs"}
    ]);

    function addItem() {
        const newItem = prompt("Enter item...");
        if (newItem) {
            setItems(prev => [...prev, {id: uuid(), name: newItem}]);
        }
    }
    
    return (
        <Container>
            <Button
                color="dark"
                style={{marginBottom: "2rem"}}
                onClick={addItem}>
                Add Item
            </Button>
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

