// var mockData = require("../db")
var axios = require("axios");

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/content", (request, response) => {
        console.log("Trying to get data..");
        var url = "https://cdn.contentful.com/spaces/05dm8wov7m1i/environments/master/entries?access_token=vups_72apQaJaURGtK5xcTt_UE1jMwwBApSQCQhX3Io";

        getData(url).then((res) => {
            console.log("success");
            setTimeout(() => {
                response.status(200).send(res.data);
                console.log(res.data);
            }, 1000)

        }).catch(err => {
            console.log(err);
        })
    })
}

var getData = async url => {
    try {
        const response = await axios.get(url);
        const data = response;
        return data;
    } catch (err) {
        console.log(err);
    }
};


module.exports = appRouter;