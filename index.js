const express = require("express");
const app = express();
const ejs = require("ejs")
require("dotenv").config();

app.set("view engine", "ejs")

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on 3000");
})

app.get("/", (req, res) => {
    res.render("index")
})

