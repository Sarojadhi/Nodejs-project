import path from 'path'

/* This line code shows path name given above .
 const fullpath = path.join("path","ai.py","test.txt");
console.log(fullpath);
 
*/


/* 

this line give absolute path means full path .
 const absolutePath = path.resolve();
console.log(absolutePath)

*/

// this line of code check if file is in pdf form or not . 

const extname = path.extname("resume.pdf");
console.log(extname);
if (extname == '.pdf') {

    console.log("its is in pdf form .");

}
else {

    console.log("sorry it need to be in pdf form .")
}