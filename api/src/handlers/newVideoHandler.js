const  { json } = require('sequelize');
const newVideoController = require('../controllers/newVideoController');


const newVideoHandler = async (req, res) => {
    
    const { title, date, image, url } = req.body;

    try {
        const response = await newVideoController( title, date, image, url );
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message})
    }
}

module.exports = newVideoHandler