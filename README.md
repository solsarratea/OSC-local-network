# OSC in Local Networks
Repository to have simple examples of how to connect devices through OSC on local private network.

## Testing Local : 
SERVER_PORT = "localhost"

1. Start OSC server
   Inside `/osc` : 
    - Run `npm i`
    - Start osc server by running `node server.js`

2.  Start a web client to receive messages 
   - Run locally `/web-client` 
    I 've been testing it with `live-server .`

3.  Send osc message from a local OSC client.
   Inside `/osc` :
   - Run `node client-sender.js`
  
Message should be display in web client.
