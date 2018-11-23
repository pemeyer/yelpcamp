var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(8080, () => {
    console.log("Server YelpCamp is listening");
});