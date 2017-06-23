var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
        {name: "Granite Hill", image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}
    ];
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});