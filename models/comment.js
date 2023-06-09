const mongoose = require('mongoose');

const Schema = mongoose.Schema

const commentSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', commentSchema);