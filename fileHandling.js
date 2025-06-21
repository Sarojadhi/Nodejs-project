import {readFile, writeFile } from 'fs/promises'


// README FILE : THIS above line of code help to read text from text.jsx file .
const readeFile = async (filename)=>{
    const data = await readFile (filename , "utf8");
    console.log(data);

};


const write_file =async (filename, content)=>{
await writeFile(filename,content);
};
write_file("ai.py","This is a python file .");

readeFile("ai.py");