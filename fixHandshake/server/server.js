const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}/../../client`;
console.log(`serving static from ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (sock) => {
    console.log('someone connected');
    sock.emit('message', 'hey you are connectd');
});

server.on('error', (err) => {console.error('Server error:', err);});

server.listen(8090, () => {console.log('RPS started on 8090');});