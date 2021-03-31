const fs = require('fs')
const chalk = require('chalk')


if (process.argv.length < 3){
    console.log(chalk.yellow('Minimun 2 files please/ node: Your 1 st file / Your 2 ème files'));
    process.exit(1)
}

let commandeArgv = process.argv.slice(2, -1)

for(let i = 2; i < commandeArgv.length; i++ ){

    if(!fs.existsSync(commandeArgv[i])){
        console.log(chalk.yellow(`Your ${commandeArgv} is not exist`))
        process.exit(1)
    }


}