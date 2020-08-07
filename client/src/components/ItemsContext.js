import React, { useState, useEffect } from "react";
const ItemsContext = React.createContext();

function ItemsContextProvider({children}) {
    //Global State
    const [ isOpen, setIsOpen ] = useState(false);
    const [ items, setItems ] = useState([]);
    const [ idToDelete, setIdToDelete ] = useState("");

    //Perform a new get request from the MongoDB whenever there is a change - a la component did update - and update the global state of items with the latest source of record for items in the MongoDB
    useEffect(() => {
        fetch("api/items")
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error));
    });

    //Whenever a new item is selected for deletion, perform a delete request from the MongoDB to remove the associated item
    useEffect(() => {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        };
        if (idToDelete) {
            fetch(`/api/items/${idToDelete}`, options)
                .then(res => console.log(res.status + " deleting"))
                .catch(error => console.log(error));
        }
    }, [idToDelete])


    //Toggle works in conjunction with the Item Modal Component to determine whether Item Modal should be displayed
    function toggle() {
        setIsOpen(!isOpen);
    }
    
    return (
        <ItemsContext.Provider value={{isOpen, toggle, items, setItems, setIdToDelete}}>
            {children}
        </ItemsContext.Provider>
    )
}

export { ItemsContextProvider, ItemsContext };