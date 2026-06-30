const {error} = require ("console");
const fs = require('fs');
fs.writeFile ("Output.txt",'Sucessfully Written',(err)=>
{
if(err)
{
    console.log("Error Occur",err);
    
}
else
{
    console.log("FIle Written Sucessfully");
    
}

})