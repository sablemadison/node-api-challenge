const express = require('express');

const router = express.Router();

const actions = require('./data/helpers/actionModel');
const projects = require('./data/helpers/projectModel');
//get

router.get('/', (req, res)=> {
    actions.get()
    .then((allActions)=>{
        res.status(200).json(allActions)
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json({error:'The actions could not be retrieved.'})
    })
})

//get single action

router.get('/:id', (req, res)=> {
    actions.get(req.params.id)
    .then((action)=> {
        res.status(200).json(action)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error:'The action could not be retrieved.'})
    })
})

// post 
router.post('/', validateId, (req, res)=> {
actions.insert(req.body)
.then((action)=> {
    res.status(200).json(action)
})
})

//put 

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
        res.status(200).json(`The resource belonging to id ${req.params.id} was deleted`)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({error:'The action could not be deleted'})
    })
    
})
function validateId (req, res, next){
let project = projects.get(req.body.id)

if(project){
    next()
} else {
    res.status(500).json({error:'The id could not be found'})
}

}
module.exports = router;