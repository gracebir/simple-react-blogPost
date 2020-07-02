const express = require('express');
const userRoute = require('./route/users');
const blogRoute = require('./route/blogpost');
const cors = require('cors')
const server = express();

server.use(express.json());
server.use(cors())

// calling our router
server.use('/api/user',userRoute);
server.use('/api/blogpost',blogRoute);
const port = process.env.PORT | 5000;

server.listen(port,()=>console.log(`server listen to port ${port}....`));