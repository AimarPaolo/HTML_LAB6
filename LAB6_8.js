function validateTemperature(f1){
    const for1 = document.getElementById(f1)
    var regexp = /(\+|-)\d{0,3}\.\d/;
    let temperature = for1.testo.value
    if(regexp.test(temperature)){
        window.alert("la temperatura inserita è corretta e vale: "+temperature)
    }else{
        window.alert("la temperatura inserita non rispetta le richieste, ecco alcuni esempi: +3.2 o -34.2")
        // in questo caso la soluzione è molto generica, si dovrebbe poi creare diverse regex per poi differenziare i diversi casi ed 
        // aiutare l'utente a risolvere l'errore...
    }
}