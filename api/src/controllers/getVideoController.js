const { Video } = require('../db')

const getVideoController = async () =>{
  const response = await Video.findAll();
  return response;
};

module.exports = getVideoController