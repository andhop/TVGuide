const navdata = require("../../public/nav.json");

function process(req){
  return {"navdata" : navdata}
}

module.exports = process;