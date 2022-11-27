import express from 'express';
import socketIO from "socket.io"
import http from "http"

const port=process.env.PORT||3000
var app=express();
let server = http.createServer(app);
var io=socketIO(server);

// make connection with user from server side
io.on('connection', (socket)=>{
console.log('New user connected');
//emit message from server to user
socket.emit('newMessage', {
	from:'jen@mds',
	text:'hepppp',
	createdAt:123
});

// listen for message from user
socket.on('createMessage', (newMessage)=>{
	console.log('newMessage', newMessage);
});

// when server disconnects from user
socket.on('disconnect', ()=>{
	console.log('disconnected from user');
});
});

server.listen(port);
