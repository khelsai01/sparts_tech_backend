const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { schoolRouter } = require("./school/school.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/schools',schoolRouter)

app.listen(8080, async() => {
    await connection;
    console.log("Server is running on port 8080");
})