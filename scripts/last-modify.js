var fs = require('fs');
var moment = require('moment');
fs.writeFile("./src/store/lastupdate.json", '{"dateUpdate":"' + moment().format() + '"}', function(err) {
  if (err) {
      console.log(err);
  }
});
