const express = require("express");

const router = express.Router();

const projects = require('./data/helpers/projectModel');

//get

router.get('/', (req, res) => {
    projects.get()
    .then((allProjects)=> {
        res.status(200).json(allProjects);
    })
    .catch((err)=> {
        res.status(500).json({error:'The projects could not be retrieved.'})
    })
})

//get single project

router.get('/:id', (req, res) => {
projects.get(req.params.id)
.then((project)=> {
    res.status(200).json(project)
})
.catch((err)=> {
    console.log(err);
    res.status(500).json({error:'The project could not be retrieved.'})
})
})
//post 

router.post('/', (req, res) => {
    projects.insert(req.body)
    .then((newProject)=> {
        res.status(200).json(newProject);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({error:'The project could not be added.'})
    })
})

// put

router.put('/:id', (req, res) => {
    let changes = req.body;
    let id = req.params.id;
    projects.update(id, changes)
    .then((updatedProject)=> {
        res.status(200).json(updatedProject)
    })
    .catch((err)=> {
        res.status(500).json({error:'The project could not be updated.'})
    })
})

// delete

router.delete('/:id', (req, res)=> {
    projects.remove(req.params.id)
    .then((deleted)=>{
        res.status(200).json(`The resource belonging to id ${req.params.id} was deleted.`)
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({error:'The project could not be deleted.'})
    })
})
module.exports = router;