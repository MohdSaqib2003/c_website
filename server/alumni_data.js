
var express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my@sql",
  database: 'college'
});


app.post("/alumni", (req, res) => {
  const name = req.body.name;
  const batch = req.body.batch;
  const contact = req.body.contact;
  const about = req.body.about;
  db.query(
    "INSERT INTO alumni(name,batch,contact,about) VALUES(?,?,?,?)",
    [name, batch, contact, about],
    (err, result) => {
      console.log(err);
    }
  )
})

app.post("/suggestion", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  db.query(
    "INSERT INTO suggestion(name,email,message) VALUES(?,?,?)",
    [name,email,message],
    (err, result) => {
      console.log(err);
    }
  )
})

// `INSERT INTO alumni(name,batch,contact,about) VALUES(${name},${batch},${contact},${about})`,// [name,batch,contact,about],

app.listen(8080, () => {
  console.log("server running");
});
