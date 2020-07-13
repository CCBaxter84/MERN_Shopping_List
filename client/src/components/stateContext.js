import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const { Provider, Consumer } = React.createContext();

function StateContextProvider(props) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ items, setItems ] = useState([
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Water"},
        {id: uuid(), name: "Steak"},
        {id: uuid(), name: "Eggs"}
    ]);

    function toggle() {
        setIsOpen(!isOpen);
    }

    function addItem() {
        const newItem = prompt("Enter item...");
        if (newItem) {
            setItems(prev => [...prev, {id: uuid(), name: newItem}]);
        }
    }
    
    return (
        <Provider value={{isOpen, toggle, items, addItem, setItems}}>
            {props.children}
        </Provider>
    )
}

export { StateContextProvider, Consumer as StateContextConsumer }