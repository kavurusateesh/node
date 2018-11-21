var fs = require("fs");
fs.rmdir("vendor", function (error){
    console.log(error);
})