//import and define packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import router
const itemsRouter = require("./routes/api/items");

//define the API
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Configure and connect to Mongo Database
const db = require("./config/keys").mongoURI;

async function connectToDB() {
    try {
        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(await "Mongoose DB Connected...");
    } catch (err) {
        console.log(err);
    }
}

connectToDB();

//use ItemsRouter
app.use("/api/items", itemsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));