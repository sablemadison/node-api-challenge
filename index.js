const express = require('express');



const actionsRouter = require('./actionsRouter');

const server = express();

// parse incoming objects
server.use(express.json());


server.use('/', actionsRouter);

const port = 5000;

// server.get('/', (req, res)=> {
//     res.send('Hello there')
// })

server.listen(port, () => {
    console.log(`Server running at ${port}`)
})
