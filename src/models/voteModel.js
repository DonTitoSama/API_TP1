const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema ({
    numbervote: {
        type: Number,
        required: "Doit etre compris entre 1 et 5"
    },
    created_at: {
        type: Date, 
        default: Date.now
    },
    id_music: {
        type: String
    }
});

module.exports = mongoose.model('Vote', voteSchema);