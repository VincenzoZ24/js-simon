/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


let numeri_generati = document.querySelector(".numeri_generati");
let btn = document.querySelector("button")
btn.classList.add("d_none")

function numberRandom(min, max) {
    return Math.floor(Math.random() * 100) + 1;

}
const arrNumber = []
for (i = 1; i <= 5; i++) {
    numberRandom(1, 100);
    arrNumber.push(numberRandom(1, 100))
    
    numeri_generati.innerHTML = arrNumber;
}

const idInterval = setInterval(conto, 5000);
function conto() {
    numeri_generati.classList.add("d_none")
}
function stop() {
    clearInterval(idInterval)
    
}
let Number = setTimeout(inserisciNumeri, 5000)
let inputNumber = document.querySelector(".input");
let esito =document.querySelector(".esito")

function inserisciNumeri() {
    esito.classList.remove("d_none")
    inputNumber.classList.remove("d_none");
    btn.classList.remove("d_none");
    
    btn.addEventListener("click", function(){
        
        console.log(inputNumber.value)
        if (arrNumber.includes(parseInt(inputNumber.value))) {
            esito.innerHTML = "HAI VINTO"
        } else {
            esito.innerHTML = "HAI PERSO"
        }
        inputNumber.value= ""
    })
};


