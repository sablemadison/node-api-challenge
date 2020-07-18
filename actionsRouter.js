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

// post
router.post('/', (req, res)=> {

})

//put

router.put('/', (req, res)=> {
    
})

//delete

router.delete('/', (req, res)=> {
    
})

module.exports = router;