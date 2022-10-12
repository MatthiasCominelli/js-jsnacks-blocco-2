//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let risultato = document.getElementById('risultato');
const btn = document.getElementById("bottone");

btn.addEventListener("click", premuto);

function premuto(){

    let  NumUno = document.getElementById("numeroscelto").value;
    if(NumUno % 2 == 0){
        risultato.innerText = NumUno
    } else {

        risultato.innerText = parseInt(NumUno) + 1
    }
       
    



}