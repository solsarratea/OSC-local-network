/** 
 * 
 * Client and server running on same .
 * 
 * **/

var osc = require('node-osc');
const CLIENT_IP = "localhost";
const CLIENT_PORT = 8081;

oscClient = new osc.Client(CLIENT_IP, CLIENT_PORT);

msg = new osc.Message("/test")
msg.append(`∩｀-´)⊃━`)
msg.append(`☆ﾟ.*･｡ﾟ`)
oscClient.send(msg, () => oscClient.kill() )