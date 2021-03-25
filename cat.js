const fs = require('fs')

if (process.argv.length !== 3) {
    console.log(`usage: node countVowel.js file.txt`)
    process.exit(1)
  }

  if (!fs.existsSync(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
  }

const txt = fs.readFileSync(process.argv[2], 'utf-8')
console.log(txt) 
process.exit





                              // SE QUE JE PENSER AVOIR COMPRIS

// const fs = require('fs')
// const copieFichier = 'file.txt' 

// if (process.argv.length !== 3) {
//     console.log(`usage: node countVowel.js file.txt`)
//     process.exit(1)
//   }

//   if (!fs.existsSync(process.argv[2])) {
//     console.log(`Error: ${process.argv[2]} does not exist`)
//     process.exit(1)
//   }

    
// if(process.argv[2] !== copieFichier){
//    console.log('Vous demandez le mauvais fichier') 
//     process.exit
//     }
  
// if(process.argv[2] === copieFichier){
// const txt = fs.readFileSync('./file.txt', 'utf-8')
// console.log(txt) 
// process.exit
// }