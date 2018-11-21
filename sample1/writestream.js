var fs= require('fs');
var stream = fs.createWriteStream("file1.js");
stream.write("hello starting stream testing");