"use strict";

function calcola_operazione(t1, t2, btn, ris) {
    let numRegex = /^(?:[1-9]|[1-9][0-9])$/;
    let text1 = parseInt(t1);
    let text2 = parseInt(t2);
    let risultato = "";

    if (numRegex.test(text1) && numRegex.test(text2)) {
        if (btn === "somma") {
            risultato = text1 + text2;
        } else if (btn === "sottrazione") {
            risultato = text1 - text2;
        } else if (btn === "prodotto") {
            risultato = text1 * text2;
        } else if (btn === "divisione") {
            if (text2 !== 0) {
                risultato = text1 / text2;
            } else {
                risultato = "Impossibile dividere per zero";
            }
        }
    } else {
        risultato = "Inserire solo numeri da 1 a 99";
    }
    ris.value = risultato;
}
