function validateUsername(f1){
    const for1 = document.getElementById(f1);
    let regexp_alfabetic= /^[A-Z][a-z]{0,9}$/;
    let regexp_eta = /^(([0-9])|([1-9][0-9])|(1[0-9][0-9]))$/;
    //in questo caso inserisco ^ e $ perchè voglio che corrispondano esattamente a questo
    let regexp_prefix = /^0\d{1,2}\-\d{3}-?\d{3,4}$/;
    if(regexp_alfabetic.test(for1.nome.value) && regexp_eta.test(for1.eta.value) && regexp_prefix.test(for1.telefono.value)){
        window.alert("lo username inserito è corretto!!");
    }else if(regexp_alfabetic.test(for1.nome.value) == false){
        window.alert("lo username inserito non contiene sufficienti caratteri alfabetici, o li contiene errati (hai ad esempio inserito ad esempio inserito il primo carattere maiuscolo??");
    }else if(regexp_eta.test(for1.eta.value) == false){
        window.alert("è stata inserità un'età scorretta");
    }else if(regexp_prefix.test(tel) == false){
        window.alert("il prefisso non è corretto");
    }else{
        window.alert("ERRORE NON RICONOSCIUTO!")
    }
}