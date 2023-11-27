const getVideoController = require("../controllers/getVideoController");


const getVideosHandler = async (req, res) =>{
    try {
      const response = await getVideoController()
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json({error: error.message});
    }
};

module.exports = getVideosHandler