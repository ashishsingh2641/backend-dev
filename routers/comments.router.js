const express = require('express');
const router = express.Router();
const Comments = require('../models/comments.model');
const auth = require('../middleware/auth');


router.get('/api/v1/get-all-comments', auth, async (req, res) => {
    //const limit = req.query.limit
    //console.log(limit, "limit")
    const sorts = {};
    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(":");
        console.log(parts)
        sorts[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        const newLocal = await Comments.find({}).sort(sorts).limit(1).skip(10);
        const data = newLocal;
        res.status(200).send(data)
    } catch(e) {
       res.status(500).send(e)
    }
})
const CommentsRouter = router;
module.exports = CommentsRouter;