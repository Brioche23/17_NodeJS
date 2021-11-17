//  Activating socket io
let clientSocket = io();
clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("red");
  circle(data.x, data.y, 20);
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  fill(255);
  circle(mouseX, mouseY, 20);
}

//  Use mouseMoved function to send information to server
function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };
  clientSocket.emit("mouse", message);
}
