// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


let nKm = (prompt ('Quanti chilometri devi percorrere?'));

let age = (prompt ('Quanti anni hai?'));

let result = (document.getElementById('ticket-result'));

if(isNaN(nKm) || isNaN(age)) {
    result.innerHTML = 'Attenzione! Il sistema accetta solo valori numerici';
}

const priceKm = 0.21;

let fullPrice = (nKm * priceKm);

if (age < 18) {
    finalPrice  = (fullPrice - (fullPrice * (20 / 100)));
} else if (age > 65) {
    finalPrice  = (fullPrice - (fullPrice * (40 / 100)));
} else {
    finalPrice  = fullPrice;
}

let n = finalPrice.toFixed(2);

result.innerHTML = n;

