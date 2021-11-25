const vehicule1 = {
    conducteur: {
        first: "Louis",
        second: "roger",
        third: "nils",
    }, // un objet dasn un objet
    marque: "bmw", // atribut 
    vitesse: "200km/h",
    modele: "jamesbond",
    couleur: "vert",
    annee: "1239",
    rouler: function () {
        console.log("je roule a " + this.vitesse); // l'objet courant, c'est donc 200km/h
    } // une méthode - souvent verbe
}

console.log(vehicule1.marque) // on test son atribut de marque, qui est donc BMW
console.log(vehicule1.rouler()) // une fonction avec parenthèse ()
console.log(vehicule1.conducteur.second)

