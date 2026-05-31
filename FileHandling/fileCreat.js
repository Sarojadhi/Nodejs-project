const { error } = require('console');
const fs = require('fs');
// fs ==> file System 
fs.writeFile("Output.txt","file writing ",(err)=> {
    if (err){
        console.log("eRROR OCCUR",err);
    }
    else
         {
            console.log("File Writen Sucessfully");

}
        
})