var fs = require("fs");
fs.readdir("newlib1", function(error, files){
    if(error)
    {
        console.log(error);
    }
    
    else
    {
        
        files.forEach(file => {
            fs.unlink("newlib1/"+file, function(error){
                if(error){
                    console.log(error);
                }
             });
                    
        });
        fs.rmdir("newlib1", function(suc){
            console.log("successfully deleted directive");
        });
    
    }
})