let tab = [5,8,0,4]
let vide = ""

for (i = 0; i < tab.length; i++){
    vide = vide + tab[i]
    // console.log(`${tab[i]}`)
}

console.log(vide.split('').join(' '))