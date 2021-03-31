const fs = require('fs')
const chalk = require('chalk')


if (process.argv.length < 3){
    console.log(chalk.yellow('Minimun 2 files please/ node: Your 1 st file / Your 2 ème files'));
    process.exit(1)
}

let commandeArgv = process.argv.slice(2, -1)

for (const elem of commandeArgv) {
    if(!fs.existsSync(elem)){
                 console.log(chalk.yellow(`Your ${elem} is not exist`))
                 process.exit(1)
             }
             const stats = fs.statSync(elem);
             if (!stats.isFile()) {
               console.log(chalk.blue(`warning : ${elem} pas un fichier.`));
               process.exit(1);
             }
             let contentFile = '';
//length -1 pour select le dernier
for (let i = 2; i < process.argv.length - 1; ++i) {
  contentFile += fs.readFileSync(process.argv[i], 'utf-8') + '\n';
}
const last = process.argv[process.argv.length - 1];
fs.writeFileSync(last, contentFile);
      
    
}

























// for(let i = 2; i < process.argv.length -1; i++ ){

//     if(!fs.existsSync(process.argv[i])){
//         console.log(chalk.yellow(`Your ${process.argv[i]} is not exist`))
//         process.exit(1)
//     }
// }

// for(let i = 0; i < commandeArgv; i++ ){

//     if(!fs.existsSync(process.argv[i + 2])){
//         console.log(chalk.yellow(`Your ${process.argv[i + 2]} is not exist`))
//         process.exit(1)
//     }
// }