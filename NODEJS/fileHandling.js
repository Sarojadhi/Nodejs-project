import {readFile, writeFile , appendFile,mkdir} from 'fs/promises'


// README FILE : THIS above line of code help to read text from text.jsx file .
const readeFile = async (filename)=>{
    const data = await readFile (filename , "utf8");
    console.log(data);

};

// this line of code write in a file . 
const write_file =async (filename, content)=>{
await writeFile(filename,content);
};
write_file("ai.py","This is a python file .");

readeFile("ai.py");
// this line of code add text inside ai.py .
const appendfile = async(filename,content)=>{
    await appendFile(filename,content);
    console.log("secessfully added ");
}
// this line code write text inside ai.py .
appendfile("ai.py","added by appendfile . ")

// this line of code only generate one file 
const file_dir =async (dir)=>{
    await mkdir (dir);

};
file_dir("page")

// this line of code make a file inside home i.e : first ,second .
const dir= async(path)=>{
    await mkdir (path, {recursive:true})
}
dir("home/first/second")