const path = require("path");
const fs = require("fs");

const pathFile = path.join(__dirname, '/db/text.txt');

// console.log(pathFile);

// fs.readFile(pathFile, "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })


const text = 'new text ';

fs.writeFile(pathFile, text, "utf-8", (err) => {
    if (err) throw err;
})



const fsPromises = fs.promises;

// async function readFile() {
//     try {
//         const data = await fsPromises.readFile(pathFile, "utf-8"); 
//         console.log('Promis', data); 
//       } catch (error) {
//         console.log(error)
//       }
// }

// readFile();

async function writeFile() {
    const data = "Hello, I'm using the new fs promises API";

    try {
        await fsPromises.writeFile(pathFile,  data, "utf-8"); 
    } catch (error) {
        console.log(error)
    }
}

writeFile();

