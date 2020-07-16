import React, { useContext } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ItemsContext } from "./ItemsContext";

function ShoppingList() {
    //import global state using context
    const { items, setItems, setIdToDelete } = useContext(ItemsContext);

    function deleteItem(id) {
        setIdToDelete(id);
        setItems(prev => prev.filter(item => item.id !== id))
    }

    return ( 
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    style={{marginRight: "0.5rem"}}
                                    color="danger"
                                    size="sm"
                                    onClick={() => deleteItem(_id)}>&times;
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

