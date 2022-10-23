const express = require("express");
const app = express();
const ejs = require("ejs")


app.set("view engine", "ejs")

app.listen(3000, () => {
    console.log("Server started on 3000");
})

app.get("/", (req, res) => {
    res.render("index")
})