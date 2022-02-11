const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://augustus:forfreedom20@romanempire.afapt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const user = {
    "username": "mansu",
    "id": "10239109"
}

const miri = {
    "username": "Miri",
    "id": "10239101"
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

//ROUTES
app.get("/", function(req, res){
    res.send("Mert")
})

app.get("/user", function(req, res){
    res.send([user, miri])
})

app.post("/submit", (req, res) => {
    console.log("post request received")
    res.send(req.body)
})

//port door here :P
app.listen(3001, function(){
    console.log("port opened at 3001")
})