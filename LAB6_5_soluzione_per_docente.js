"use strict";

function calcola_operazione(f1) {
    let numRegex = /^(?:[1-9]|[1-9][0-9])$/;
    let text1 = parseInt(f1.text_1.value);
    let text2 = parseInt(f1.text_2.value);
    let risultato = "";

    if (numRegex.test(text1) && numRegex.test(text2)) {
        if (f1.btn.value === "somma") {
            risultato = text1 + text2;
        } else if (f1.btn.value === "sottrazione") {
            risultato = text1 - text2;
        } else if (f1.btn.value === "prodotto") {
            risultato = text1 * text2;
        } else if (f1.btn.value === "divisione") {
            if (text2 !== 0) {
                risultato = text1 / text2;
            }/* else {
                risultato = "Impossibile dividere per zero";
            }*/
        }
    } else {
        risultato = "Inserire solo numeri da 1 a 99!!!!!";
    }
    f1.risultato.innerText = risultato
}
