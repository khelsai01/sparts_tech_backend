const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { schoolRouter } = require("./school/school.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/schools', schoolRouter);

app.get('/', (req, res) => {
    try {
        res.status(200).send("welcome to the sparts tech home page")
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

app.listen(8080, async() => {
    await connection;
    console.log("Server is running on port 8080");
})