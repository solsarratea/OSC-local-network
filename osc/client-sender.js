 var osc = require('node-osc');
 const SERVER_IP = "192.168.1.53"; 
 const SERVER_PORT = 8081;
 
 oscClient = new osc.Client(SERVER_IP, SERVER_PORT);
 
 msg = new osc.Message("/test")
 msg.append(`∩｀-´)⊃━`)
 msg.append(`☆ﾟ.*･｡ﾟ`)
 oscClient.send(msg, () => oscClient.kill() )