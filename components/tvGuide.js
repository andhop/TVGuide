const https = require("https");
const xmlParser = require("xml2js").parseString;
const moment = require("moment");
const settings = require("./settings.json");
const fs = require("fs");

module.exports = {
  APIPath : "https://www.freesat.co.uk/tv-guide/api/",
  GetFeed : function() {
    if(settings.last_downloaded == ""){ 
    https.get(this.APIPath, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      const alldata = JSON.parse(data);
     // return alldata;   
      resp.on("end", () => {        
          console.log(JSON.parse(data));
          fs.writeFile("./last_file.json", data, (err, data) => {
            if(err) console.log(err);

            
          }); 
        
      })
    }); // End Http.get
    }
  }
};