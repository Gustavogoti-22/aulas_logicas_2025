const prompt = require('prompt-sync')()
let temperatura = Number(prompt(`Qual a tempetratura: `))
if (temperatura < 15){
    console.log(`Está frio`)
}else if (temperatura >= 15 && temperatura <= 25){
    console.log(`Está agradavel`)
}else if (temperatura >= 26 && temperatura <= 35){
    console.log(`Está quente`)
}else if (temperatura >35){
    console.log(`Está muito quente`)
}