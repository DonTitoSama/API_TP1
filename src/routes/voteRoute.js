const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

router
    .route('/music/:id_music/vote')
    .get(voteController.listAllVote)
    .post(voteController.createAVote);

router
    .route('/vote/:id_vote')
    .get(voteController.getAVote)
    .put(voteController.updateAVote)
    .delete(voteController.deleteAVote);

module.exports = router;