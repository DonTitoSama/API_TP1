const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVote = async (req, res) => {
    try {
        const vote = await Vote.find({id_musict: req.params.id_music});
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createAVote = async (req, res) => {
    try {
        await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, id_music: req.params.id_music});
        const number = req.body.numbervote;
        if (number <= 5 && number >=1) {
            try {
                const vote = await newVote.save();
                res.status(201);
                res.json(vote);
            } catch (error) {
                res.status(500);
                console.log(error);
                res.json({message: 'Erreur serveur (db)'});
            }
        } else {
            res.status(500);
            console.log(error);
            res.json({message: 'Vote doit etre compris entre 1 et 5'});
        }
        
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur (id_music)'});
    }
}

exports.updateAVote = async (req, res) => {
    try {
        await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200);
        res.json({message: 'Vote modifié'});
    } catch (error) {
        res.status(404);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}


exports.deleteAVote = async (req, res) => {
    try {
        await Vote.findByIdAndDelete(req.params.id_vote);

        if (!Vote) {
            res.status(204);
            res.json({message: 'Erreur serveur'});
        } else {
            res.status(200);
            res.json({message: 'Vote supprimé'});
        }

    } catch (error) {
        res.status(404);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.getAVote = async (req, res) => {
    try {
        await Vote.findById(req.params.id_vote);
        if (!Vote) {
            res.status(204);
            res.json({message: 'Erreur serveur'});
        } else {
            res.status(200);
            res.json(req.body);
        }
    } catch (error) {
        res.status(404);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

