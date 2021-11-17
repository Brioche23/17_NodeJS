//  Activating socket io
let clientSocket = io();
clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  circle(mouseX, mouseY, 20);
}
