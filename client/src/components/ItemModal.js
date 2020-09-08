import React, { useState } from "react";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input } from "reactstrap";

function ItemModal() {
    const [ name, setName ] = useState("");
    const [ modal, setModal ] = useState(false);

    function toggle() {
        setModal(prev => !prev);
    }

    function onChange(e) {
        setName(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        postUser();
        toggle();
    }

    function postUser() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ name: name }),
            responseType: "json"
        }
        if (name) {
            fetch("api/items", options)
                .then(res => console.log(`${res.status} Added ${name}`))
                .catch(error => console.log(error));
        }
    }

    return (
        <div>
            <Button
                color="info"
                style={{marginBottom: "2rem"}}
                onClick={toggle}
            >Add Item
            </Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
                autoFocus={false}
            >
                <ModalHeader toggle={toggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item"></Label>
                            <Input
                                type="text"
                                name={name}
                                id="item"
                                placeholder="Add to shopping list"
                                onChange={onChange}
                                autoFocus={true}
                            />
                            <Button color="dark" style={{marginTop: "2rem"}} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal;