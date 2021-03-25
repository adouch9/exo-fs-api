const fs = require('fs')

if (process.argv.length <= 2) {
     console.log(`usage: node test.js file.txt`)                    // Condition pour verifier si le terminal n'est pas vide 
    process.exit(1)
  }

   let argument = process.argv.slice(2)                              // Se positionner a la premiere case du terminal 

 for(let i = 0; i < argument.length; i++){                           // Boucle pour passer sur chaqun des fichier en fonction de se qui ecrit sur le terminal
 
    if (!fs.existsSync(argument[i])) {
        console.log(`Error: ${argument[i]} does not exist`)          // Boucle pour verifier si les fichier sont authentique
        continue
      }                                                             
    const txt = fs.readFileSync(argument[i], 'utf-8')                // Affichage des commandes demander par l'utilisateur
    console.log(txt)  
  
    }