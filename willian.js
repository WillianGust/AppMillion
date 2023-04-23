var fs = require('fs');
  
// Use fs.readFile() method to read the file
fs.readFile('willian.txt', 'utf8', function(err, contents){
      
    // Display the file content
    console.log(contents);
});