var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek", 
        image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg",
        description: "blah blah blah blah blah"
    },
    {
        name: "Granite Hill", 
        image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: "blah blah blah blah blah"
    },
    {
        name: "Mountain Goat's Rest", 
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "blah blah blah blah blah"
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Removed Campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a new comment");
                            }
                        });
                }
            });
        });
    });
    
    // add a few comments
}

module.exports = seedDB;