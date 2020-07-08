//import express and Router
const express = require("express");
const router = express.Router();

//import Item model
const Item = require("../../models/item");

//Set up Routes
//get all Items sorted in descending order
router.get("/", async (req, res) => {
    try {
        const items = await Item.find().sort({ date: -1 });
        res.json(items);
    } catch(err) {
        res.status(500);
        console.log(err);
    }
});

//post a new item to the database
router.post("/", async (req, res) => {
    const newItem = new Item({ name: req.body.name });
    try {
        const item = await newItem.save();
        res.status(201).send(`${item.name} added to database`);
    } catch(err) {
        res.status(500);
        console.log(err);
    }
});

//delete an item from the database
router.delete("/:id", async (req, res) => {
    try {
        const itemToDelete = await Item.findById(req.params.id);
        const item = await itemToDelete.delete();
        res.status(200).send(`${item.name} deleted from database`)

    } catch(err) {
        res.status(500).send("Error deleting requested item");
    }
});

//export router
module.exports = router;

