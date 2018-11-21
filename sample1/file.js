var fs= require("fs");
fs.mkdir("newlib", function(error){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("directive created");
    }
})