// Imports
const express = require('express');
const helmet = require('helmet')
const cors = require('cors')


const server = express();

// In Action

server.use(helmet())
server.use(express())
server.use(cors())

server.get('/', (req, res) => {
res.json({api: "running"})
})

module.exports = server;
