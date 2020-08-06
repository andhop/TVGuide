const routes = require("express").Router();
const navdata = require("../public/nav.json");


  navdata.routes.forEach((d) => {
    console.log(`adding route ${d.text}`)
    routes.get(d.route, (req, res, next) => {
      const processor = require(`./PageProcessing/${d.processor}`);
      res.render(d.view, {"title" : d.text,"processor" : processor(req)});
    })
  });


module.exports = routes;