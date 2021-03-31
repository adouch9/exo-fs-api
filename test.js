const fs = require('fs')

if (process.argv.length <= 2) {
    console.log(`usage: node test.js file.txt`)
    process.exit(1)
  }

  if (!fs.existsSync(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
  }

let argument = process.argv.slice(2)

 for(let i = 0; i < argument.length; i++){
  //  console.log(argument[i])
   const txt = fs.readFileSync(argument[i], 'utf-8')
  console.log(txt) 
 }



// console.log(process.argv)


