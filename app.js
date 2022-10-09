const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn.js");

const Register = require("./models/registers");

const port = process.env.PORT || 3000;
//const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../views");

//app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/signin", (req, res) => {
    res.render("signin")
});

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
})