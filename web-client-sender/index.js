const OSC_SERVER_IP = '192.168.1.53';
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


const button = document.getElementById("test");
function send(dir, msg) {
	socket.send({ type: "broadcast", content: [dir].concat(msg) });
	console.log("send")
}
button.addEventListener('click', () => {
	send("/test", "...you clicked!");
})
