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
