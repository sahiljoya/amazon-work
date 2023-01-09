import { createServer } from "http";
import { Server } from "socket.io";
const httpServer = createServer();
const socket = new Server(httpServer, {
	// cors: {
	// 	origins: ['http://dev.adaiya.in', 'http://localhost:4200', 'http://localhost:9002'],
	// 	'transports': ['websocket', 'pollings']
	// },
});

// const users = {};

// socket.on('connection', (socket) => {
// 	console.log("connecte");
// 	socket.on('join', function (data) {
// 		console.log("Data---",data);
// 		socket.join(data.room)
// 		users[socket.id] = data.user
// 		var joinUser = {
// 			message: data.user + 'has join' + data.room + 'room',
// 			users: users
// 		}
// 		socket.broadcast.to(data.room).emit('ha_jud_gya',joinUser)
// 	})
// });

// var users = {}
// socket.on("connection",(socket)=>{
// 	console.log("connecton");
// 	socket.on("join",function(data){
// 		socket.join(data.room)
// 		users[socket.id] = data.user
// 		var userJoin = {
// 			message:data.user+" has join "+data.room+" room ",
// 			users:users
// 		}
// 	socket.broadcast.to(data.room).emit('jud_gaya',userJoin)

// 	})
// })


var usersData = {}
socket.on("connection",(socket)=>{
	console.log("connection");
	socket.on("join",function(data) {
		usersData[socket.id] = data.user
		socket.join(data.room)
		var joinUser = {
			message:data.user + 'has join '+data.room+'room',
			users:usersData
		}
		socket.broadcast.to(data.room).emit("adami_jud_gaya",joinUser)
	})
})



// var users = {};
// var allUsers = [];
// var roomAll  = [];
// socket.on('connection', (socket) => {
//  //  console.log("Connected...",users);
//    socket.on('join', (data) => {
// 	   allUsers.push(data.user)
// 	   let allUsersFinal = [...new Set(allUsers)];
// 	   roomAll[data.room] = allUsersFinal;
// 	   if(roomAll[data.room].length <= 2){
// 	 socket.join(data.room);
// 	 users[socket.id] = data.user;
// 	 var  JoinRes = {
// 	   message: data.user+' has joined '+data.room+" room",
// 	   users:users,
//    };
// 	 socket.broadcast.to(data.room).emit('adami', JoinRes);
//    }else{
// 	   socket.emit('judna', 'Room is full');
//    }
//    });
// });
httpServer.listen(3003, () => {
	console.log("=======================");
})

// var user = {};
// socket.on('connection', (socket) => {
//     console.log("Connected...");
// 	socket.on('judna', function(data){
// 		console.log("Connected Join----",data);
// 	  socket.join(data.room);
// 	  user[socket.id] = data.user;
// 	  var  JoinRes = {
// 		message: data.user+' has joined '+data.room+" room",
// 		user:user,
// 	};
// 	  socket.broadcast.to(data.room).emit('ha_jud_gya_hai', JoinRes);
// 	});
// });