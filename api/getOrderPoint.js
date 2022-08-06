import express from 'express'
const mysql = require("mysql");
const router = new express.Router();
const db = mysql.createConnection({
    host: "43.142.31.47",
    port: "3306",
    user: "school",
    password: "NWPYskmPbD5yzH7K",
    database: "school",
    conncetionTimeout: "60000"
});
db.connect((err) => {
    if (err) {
        console.log(err)
    }
});
app.get("/Map/GetOrderList", (req, res) => {
    db.query("select Oid,Oaddress,Ostate from school.order", function(error, results, fields) {
        if (error) {
            console.log(error)
        } else {
            res.send(results)
        }
    })
});

router.get("/Map/GetOrderPoint", (req, res) => {
    db.query("select * from school.order WHERE Ostate = '" + Order + "'", function(error, results, fields) {
        if (error) {
            console.log(error)
        } else {
            res.send(results)
        }
    })
});
module.exports = router;