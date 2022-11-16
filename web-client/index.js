
const OSC_SERVER_IP = '127.0.0.1';
const OSC_SERVER_PORT = 8081;

var socket = io.connect(`http://${OSC_SERVER_IP}:${OSC_SERVER_PORT}`,
		{  	autoConnect: true,
			port: OSC_SERVER_PORT,
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

