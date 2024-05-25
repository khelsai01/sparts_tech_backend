const express = require('express');
const { SchoolModel } = require('./school.model');
const schoolRouter = express.Router();

schoolRouter.get('/', async (req, res) => {
    try {
        const schools = await SchoolModel.find();
        res.status(200).send({ schools: schools })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

schoolRouter.post('/add', async (req, res) => {
    const newSchoolData = req.body;
    try {
        const newSchoolAdded = await SchoolModel.insertMany(newSchoolData);
    
        res.status(200).send({ message: 'new data added succseful', "schools": newSchoolAdded })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports ={schoolRouter}