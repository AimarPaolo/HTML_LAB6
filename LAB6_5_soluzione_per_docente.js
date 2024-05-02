"use strict";

function calcola_operazione(fId) {
    let numRegex = /^(?:[1-9]|[1-9][0-9])$/;
    console.log(fId);
    const f1=document.getElementById(fId);
    console.log(f1);
    let text1 = parseInt(f1.text_1.value);
    console.log(f1.text_1);
    let text2 = parseInt(f1.text_2.value);
    console.log(text2)
    let ris = "";

    if (numRegex.test(text1) && numRegex.test(text2)) {
        if (f1.btn.value === "somma") {
            ris = text1 + text2;
        } else if (f1.btn.value === "sottrazione") {
            ris = text1 - text2;
        } else if (f1.btn.value === "prodotto") {
            ris = text1 * text2;
        } else if (f1.btn.value === "divisione") {
            if (text2 !== 0) {
                ris = text1 / text2;
            }/* else {
                risultato = "Impossibile dividere per zero";
            }*/
        }
    } else {
        ris = "Inserire solo numeri da 1 a 99!!!!!";
    }
    console.log(f1.risultato);
    f1.risultato.innerText = ris;
}
