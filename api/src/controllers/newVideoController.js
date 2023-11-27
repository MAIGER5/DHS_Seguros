const { Video } = require('../db')

const newVideoController = async ( title, date, image, url )=>{
    const videoNew = await Video.create({ title, date, image, url })
}

module.exports = newVideoController;