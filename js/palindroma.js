
// chiedo a l'utente di inserire i propri dati 
// come faccio a capire se una parola è palindroma ?
// trovo un modo per invertire la parola
// una volta inverita la metto a paragone con la parola non invertità
const parolaUser = prompt("inserire parola")

function reverse(parolaReverse){
    return parolaReverse.split("").reverse().join("");
}

let parolaMod = reverse(parolaUser)

console.log(parolaMod)
console.log(parolaUser)

if (parolaUser === parolaMod) {
    alert("well done la parola è un palindroma")
}
else{
alert("non è un palindroma")
}