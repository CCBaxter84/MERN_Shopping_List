//import mongoose and pull Schema class from it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Instantiate an Item Schema from Schema class
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//export ItemSchema as Item so that other files can use it
module.exports = Item = mongoose.model("item", ItemSchema);