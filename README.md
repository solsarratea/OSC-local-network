# OSC in Local Networks
Repository to have simple examples of how to connect devices through OSC on local private network. 

**WHY?**

Used for local installations/performances. 
Check [MIDI&OSC](https://www.youtube.com/watch?v=begeAcU0TP4), if it's worth for your purposes :)


Inspired by [this examples](https://github.com/genekogan/p5js-osc).
Coded with [@nacho692](https://github.com/nacho692)

**THIS IS A W.I.P**


### Testing Local : 
SERVER_IP = "localhost"
SERVER_PORT= 8081

1. Start server at SERVER_PORT
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


## Testing with localnetwork :
### With 2 devices:
SERVER_IP = 192.168...
SERVER_PORT= 8081

Connect devices to router and get  IPs.

For macOS and Linux: you can use ifconfig and run `ifconfig | grep "net"` or `ifconfig | grep "netmask"` 
Generally starts with 192.168...

MAKE SURE VPNs and firewalls are off.

1. Start server with node. Updates files:
   `osc/client-sender.js`, 
   `web-client-receiver/index.js`,
   `web-client-sender/index.js`
   with this device IP.

2. Start web client to receive messages

3. Start web client to send messages

You can also run the `client-sender.js`.


