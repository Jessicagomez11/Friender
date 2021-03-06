var express = require('express')
var path = require("path")

var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var friendsArr = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

// ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../Friender/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../Friender/app/public/questions.html"));
});


app.get("/api/friends", function (req, res) {
    return res.json(friendsArr);
});
// require("./routes/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

app.post("/api/friends", function (req, res) {
    
    var newFriend = req.body;


    console.log(newFriend);

    friendsArr.push(newFriend);

    res.json(newFriend);
});



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})