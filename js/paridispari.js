// / Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// facciamo scegliere all'utente pari o dispari e il computer di conseguenza avrà l'altro risultato

// scegli un numero pari o dispari in base a quello 

const btnPari = document.getElementById("bottone-pari")
const btnDispari = document.getElementById("bottone-dispari")

btnPari.addEventListener("click",function(){
    pariodispari("pari")
})

btnDispari.addEventListener("click",function(){
    pariodispari("dispari")
})


function pariodispari(pod) {
    const userNumero = prompt("Inserisci un numero da 1 a 5")
    const pcNumber = Math.round(Math.random()*4)+1
    const result = parseInt(userNumero) + parseInt(pcNumber)
    console.log(result)


    if (result % 2 === 0 && pod === "pari") {
        alert(`Il risultato è ${result} l'utente vince`)
        
    }
    else if (result % 2 !== 0 && pod === "dispari") {
        alert(`Il risultato è ${result} l'utente vince`)
        
    }
    else{
        alert(`Il risultato è ${result} l'utente perde`)
    }
    
}

console.log(pariodispari)