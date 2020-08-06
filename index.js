const express = require("express");
const TvGuide = require("./tvGuide");
const Settings = require("./settings.json");
const routes = require("./components/route");
const path = require("path");

var app = new express();
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, './public')));
app.use(routes);


const server = app.listen("8182",() => {
  console.log(`listening on ${server.address().address} : ${server.address().port}`);
});

/*const guide = TvGuide.GetFeed();
console.log("The Guide");
console.log("--------------------------");
console.log(guide);*/
//console.log(Date.parse(Settings.last_downloaded));