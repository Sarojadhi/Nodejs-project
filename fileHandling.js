import {readFile } from 'fs/promises'


// README FILE : THIS above line of code help to read text from text.jsx file .
const readeFile = async (filename)=>{
    const data = await readFile (filename , "utf8");
    console.log(data);

};
readeFile("test.txt");