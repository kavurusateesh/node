

var https =  require("https");
var options = {host:"paytm.com",port:"443", path:"/recharge", method:"GET"}
var req = https.request(options, function(res){
    console.log(`response code:${res.statusCode}`);
});
req.on('error', function(error){
    console.log(`Error with request:${error.message}`);
});
req.end();