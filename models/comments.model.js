const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: false,
    },
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Comments = mongoose.model('comments', CommentsSchema);

module.exports = Comments;