"use strict";
function validateUsername(f1){
  var regexp_low = /[a-z]/;
  var regexp_up = /[A-Z]/;
  var regexp_giusta = /[^a-zA-Z\.\,]/g;
  //in questo caso prende tutti i valori dalla a-z + A-Z + . + , e li esclude 
  //dall'insieme: quindi prende tutti i caratteri che non corrispondono a quello
  var errors;
  var uname=f1.testo.value;

  errors = uname.match(regexp_giusta);
  // la lunghezza deve essere almeno 5 quindi metto il secondo vincolo + controllo che errors non sia vero (la variabile non sia nulla)
  if (!errors && (uname.length>=5) && regexp_low.test(uname) && regexp_up.test(uname)) 
     window.alert("Username OK");
  else {
    if (uname.length < 5) 
      window.alert("Username troppo corto (minimo 5 caratteri)");
    if (!regexp_low.test(uname))
      window.alert("Username senza caratteri minuscoli");
    if (!regexp_up.test(uname))
      window.alert("Username senza caratteri maiuscoli");
    if (errors)
    // in questo caso abbiamo ottenuto errors guardando i match 
      window.alert("Caratteri errati [la ',' viene usata come separatore dei caratteri errati]: " + errors);
  }
}