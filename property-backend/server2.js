const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://ranjurave:ranjumission06@cluster0.baiiykr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MondoDB database connection established successfully");
})

const propertyRouter = require('./routes/property');

app.use('/properties', propertyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});