const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

router
    .route('/')
    .get(musicController.listAllMusic)
    .post(musicController.createAMusic);

router
    .route('/:id_music')
    .get(musicController.getAMusic)
    .put(musicController.updateAMusic)
    .delete(musicController.deleteAMusic);

module.exports = router;