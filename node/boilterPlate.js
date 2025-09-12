import { mkdir, mkdirSync } from 'node:fs';

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//     console.log('im the callback')
//     if (err) throw err;
// });
// console.log('im after callback')

mkdirSync('cats');
console.log('i come after make dir')