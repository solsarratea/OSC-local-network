const BRIDGE_PORT = 8081;
const BRIDGE_HOST = "192.168.1.53";
var osc = require('node-osc');
var io = require('socket.io')(BRIDGE_PORT);

var oscServer;
var sockets = new Map()

oscServer = new osc.Server(BRIDGE_PORT, BRIDGE_HOST);

oscServer.on('message', function(msg) {
	console.log("message " + msg)
	sockets.forEach((v, k) => {
		v.emit("message", msg)
		console.log("emitting " + msg + " to " + k)
		
	});
});

io.sockets.on('connection', function (socket) {
	sockets.set(socket.id, socket)
	console.log("Socket"+ socket.id.substring(0,8) + " connected, say hello")
	
	socket.emit("connected", { status: 1, id: socket.id });
	
	socket.on("message", function (obj) {
		console.log("message " + obj.content)
        if(obj.type == "broadcast"){
            socket.broadcast.emit("message",obj.content);
        }

  	});
	
	socket.on('disconnect', function (msg) {
		console.log("Disconnecting:", msg,socket.id) 
		sockets.delete(socket.id);

	});
});


