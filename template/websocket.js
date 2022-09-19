//const { event } = require("jquery");

var webSocket = new WebSocket("ws://localhost:3000/readLast");

const server_URL = "http://localhost:3000/allData";

//performs http request to get initial data
fetch(server_URL)
  .then(data => { return data.json() })
  .then(res => { console.log(JSON.stringify(res)) })

webSocket.onopen = (event) => {
  var sendObject = {userName:"Dashboard",message:"Trying to connect"};
  webSocket.send(JSON.stringify(sendObject));
};

webSocket.onmessage = (event) => {
  console.log(event.data)
}

//TODO
//Add UpdateGraph() -> insert new value throught websocket
//Add CreateGraph() -> uses allData to create the main graph
//Add SendCommand() -> sends 'charge' or 'discharge' command to server throught websocket