const express = require('express');
const router = express.Router();
const Resturents = require('../models/resturent.model');
const auth = require('../middleware/auth');

 
router.get('/api/v1/get-all-resturents', auth, async (req, res) => {
    try {
       // const resturent = await req.user.populate('resturents')
        const resturent = await req.user.populate({
            path: 'resturents',
            contactEmail: req.query.contactEmail,
            options: {
                limit: 2
            }
        })
        console.log(req.user.resturents, resturent)
        res.status(200).send(req.user.resturents);
    
    } catch(e) {
        res.status(400).send('Error' + e)
    }
});

router.post('/api/v1/add-resturent', auth, async (req, res) => {
    //const resturent = new Resturents(req.body);
    const resturent = new Resturents({
        ...req.body,
        owner: req.user._id
    })
    console.log(req.body)
    try {
        const success = await Resturents.create(resturent);
        res.status(201).send(success);
    }catch(e) {
        res.status(400).send(e)
    }
    
});

router.get('/api/v1/get-resturent/:id', auth, async (req, res) => {
    //console.log(req.user);
    try {
        console.log(req.user._id, "id")
       // const rest = await Resturents.find({owner: req.user._id});
        //const user = await rest.populate('owner')
        console.log(rest)
       // const rest = await req.user.populate('resturents')
        res.status(200).send(rest)
    } catch(e) {
        console.log(e.message)
    }
})


const resturentRouter = router;

module.exports = resturentRouter;
