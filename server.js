var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const campgrounds = [
    {name:"Salmon Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name:"Granite Hill", image:"https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name:"Mountain Goat's Rest", image:"https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
]

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});
app.get("/campgrounds", (req, res) => {
    res.render("campground", {campgrounds:campgrounds});
});

app.post("/campgrounds", (req, res) => {
    //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(8080, () => {
    console.log("YelpCamp server has started");
});