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
        console.log(err);
    }
});

//post a new item to the database
router.post("/", async (req, res) => {
    const newItem = new Item({ name: req.body.name });
    try {
        const item = await newItem.save();
        res.json(item);
    } catch(err) {
        console.log(err);
    }
});

//export router
module.exports = router;

