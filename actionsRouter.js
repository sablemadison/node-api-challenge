const express = require('express');

const router = express.Router();

const actions = require('./data/helpers/actionModel');

//get

router.get('/', (req, res)=> {
    actions.get()
    .then((allActions)=>{
        res.status(200).json(allActions)
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json({errorMessage:'The actions could not be retrieved.'})
    })
})

// post TEST
router.post('/', (req, res)=> {
actions.insert(req.body)
.then((action)=> {
    res.status(200).json(action)
})
})

//put test

router.put('/:id', (req, res)=> {
    let changes = req.body;
    actions.update(req.params.id, changes)
    .then((newAction)=> {
        res.status(200).json(newAction);
    })
    .catch((err)=> {
        res.status(500).json({error:'The action could not be updated'})
    })
})

//delete

router.delete('/:id', (req, res)=> {
    actions.remove(req.params.id)
    .then((deleted)=> {
        res.status().json(req.params.id)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({error:'The action could not be deleted'})
    })
    
})

module.exports = router;