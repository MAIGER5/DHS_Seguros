const { Router } = require('express');
const newVideoHandler = require('../handlers/newVideoHandler');
const getVideosHandler = require('../handlers/getVideosHandler');

const videoRouter = Router();

videoRouter.post('/', newVideoHandler);
videoRouter.get('/', getVideosHandler);

module.exports = videoRouter