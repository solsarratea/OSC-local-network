
const SERVER_IP = '192.168.1.53';
const SERVER_PORT = 8081;

var socket = io.connect(`http://${SERVER_IP}:${SERVER_PORT}`,
		{  	autoConnect: true,
			port: SERVER_PORT,
			transports: ['websocket'],
			reconnectionDelayMax: 10000,
	});

socket.on('connected', function ({ status, id }) {
	socket.id = id;
	const msg = (status == 1) ? "connected" : "not connected"
	document.getElementById("connection").innerHTML = msg;
})


socket.on('message', function (msg) {
	var display = "";
	msg.forEach(element => {
		display = display + element + " ";
	});

	document.getElementById("display").innerHTML = display +'<br/>';
});
