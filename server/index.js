const express = require("express");
const bodyParser = require("body-parser");

const ROUTES = require("./routes").ROUTES;
const API_PATH = require("./routes").API_PATH;

const users = require("./endpoints/users") ;

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get(API_PATH, (req, res) => res.status(200).json(ROUTES));

app.get(ROUTES.users, users.listUsers);
app.post(ROUTES.users, users.createUser);
app.delete(ROUTES.user, users.deleteUser);



app.listen(PORT, function(){
   console.log("backend listening on " + PORT);
});

