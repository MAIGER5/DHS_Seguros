const  { json } = require('sequelize');
const newContactController = require('../controllers/newContactController');

const newContactHandler = async (req, res) => {
    
    const { names, lastName, company, email, phone, message } = req.body;

    try {
        const response = await newContactController( names, lastName, company, email, phone, message );
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = newContactHandler