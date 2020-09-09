//import and define packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
require('dotenv').config();

//import router
const itemsRouter = require("./routes/api/items");

//define the API
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Configure and connect to Mongo Database
const db = process.env.mongoURI;

async function connectToDB() {
    try {
        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(await "Mongoose DB Connected...");
    } catch (err) {
        console.log(err);
    }
}

connectToDB();

// Use ItemsRouter
app.use("/api/items", itemsRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));