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
})

//export router
module.exports = router;