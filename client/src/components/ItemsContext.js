import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const ItemsContext = React.createContext();

function ItemsContextProvider(props) {
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

    function addItem(newItem) {
        setItems(prev => [...prev, {id: uuid(), name: newItem}]);
    }
    
    return (
        <ItemsContext.Provider value={{isOpen, toggle, items, addItem, setItems}}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export {ItemsContextProvider, ItemsContext};