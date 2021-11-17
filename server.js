console.log("up and running");
//  Load express
let express = require("express");
//  Acrivate express
let app = express();
//  Defined port
const port = 8000;
//  Defined server and connection
let server = app.listen(port);
console.log("Server is running on https://localhost:" + port);

app.use(express.static("public"));

//  Import socket
let serverSocket = require("socket.io");
//  Assign the variable that runs the express
let io = serverSocket(server);
//  On connection run the newConnection() function
io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);
}
