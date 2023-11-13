
import asyncio
import websockets
from pythonosc import udp_client
import json


# Set the IP address and port for the TouchDesigner OSC In CHOP or DAT
touchdesigner_ip = "127.0.0.1"  #  IP of your TouchDesigner machine
touchdesigner_port = 12345      #  PORT you configured in TouchDesigner

server_ip="127.0.0.1"
server_port = 56789

# Create an OSC client
client = udp_client.SimpleUDPClient(touchdesigner_ip, touchdesigner_port)

async def server(websocket, path):
    print(f"WebSocket connection established from {websocket.remote_address}")

    try:
        async for message_json in websocket:
            message = json.loads(message_json)
            print(message)
            address= message["address"]
            content= message["content"]
            print(f"Received message to adress: {address} and content: {content}")
           # Forward the message to TouchDesigner using OSC
            client.send_message(address, content)

    except websockets.exceptions.ConnectionClosed:
        print(f"WebSocket connection closed from {websocket.remote_address}")

start_server = websockets.serve(server, server_ip, server_port )

print(f"WebSocket server listening on ws://{server_ip}:{server_port}")

# Start the server
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()