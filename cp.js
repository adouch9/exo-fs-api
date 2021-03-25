const fs = require('fs')
let original = process.argv[2]
let copie = process.argv[3]

if (process.argv.length !== 4) {
  console.log(`usage: node cp.js file.txt`)
  process.exit(1)
}if(!fs.existsSync(original)){
  console.log(`your ${original} does not exist`)
  process.exit(1)
}

let copy = fs.copyFileSync(original, copie);
console.log(copy);







    // SE QUE JE PENSER AVOIR COMPRIS

// const fs = require('fs')
// let src = "src.txt"
// let dst = "dst.txt"

// if (process.argv.length !== 4) {
//     console.log(`usage: node cp.js file.txt`)
//     process.exit(1)
//   }
// if (process.argv[2] === src && process.argv[3] === dst){
//     let copy = fs.copyFileSync('src.txt', 'dst.txt');
// console.log(copy);







