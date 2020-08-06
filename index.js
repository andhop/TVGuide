aconst express = require("express");
const TvGuide = require("./components/tvGuide");
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
// just adding to check for ssh with github
/*const guide= TvGuide.GetFeed();
console.log("The Guide");
console.log("--------------------------");
console.log(guide);*/
//console.log(Date.parse(Settings.last_downloaded));