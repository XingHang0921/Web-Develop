import { mkdir, mkdirSync, writeFileSync } from 'node:fs';

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//     console.log('im the callback')
//     if (err) throw err;
// });
// console.log('im after callback')
const folderName = process.argv[2] || 'Project'


try{
    mkdirSync(folderName);
    writeFileSync(`${folderName}/index.html`);
    writeFileSync(`${folderName}/app.css`);
    writeFileSync(`${folderName}/app.js`);
}
catch(e){
    console.log("soemthing wrong " , e)
}
