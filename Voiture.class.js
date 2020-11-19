function Voiture(uneImmatriculation, uneCouleur, unPoids, unePuissance, uneCapRéservoir,unNbrPlaces) {


    var immatriculation = uneImmatriculation; // string
    var couleur = uneCouleur; // string
    var poids = unPoids; // int
    var puissance = unePuissance; // int
    var capaciteReservoir = uneCapRéservoir; //float
    var nbrPlaces = unNbrPlaces; //float
    this.assure = false; // bool has a default setting ( false )
    var msg = "Bienvenue à bord du véhicule"; // string has a defautl setting

    this.setImmat = function(uneImmatriculation) {
        if(!uneImmatriculation) throw new Error("Veuillez entrer une Immatriculation");
        if(!(isNaN(uneImmatriculation))) throw new Error("Veuillez entrer une Immatriculation correcte");
        if(uneImmatriculation.length < 2) throw new Error("Veuillez entrer une Immatriculation d'au moins 2 caractères");
        immatriculation = uneImmatriculation;
    }

    this.setCouleur = function(uneCouleur) {
        if(!uneCouleur) throw new Error("Veuillez entrer une couleur");
        if(!(isNaN(uneCouleur))) throw new Error("Veuillez entrer une couleur correcte");
        if(uneCouleur.length < 2) throw new Error("Veuillez entrer une couleur d'au moins 2 caractères");
        couleur = uneCouleur;
    }

    this.setPoids = function(unPoids) {
        if(isNaN(unPoids)) throw new Error("Veuillez entrer un nombre.");
        if(unPoids < 0) throw new Error("Veuillez entrer une valeur de puissance positive.");
        poids = unPoids;
    }

    this.setPuissance = function(unePuissance) {
        if(isNaN(unePuissance)) throw new Error("Veuillez entrer un nombre.");
        if(unePuissance < 0) throw new Error("Veuillez entrer une valeur de puissance positive.");
    }


    this.setImmat(uneImmatriculation);
    this.setCouleur(uneCouleur);
    this.setPoids(unPoids);
    this.setPuissance(unePuissance);


    this.getImmat = function() {
        return immatriculation;
    }
    this.getCouleur = function() {
        return couleur;
    }
    this.getPoids = function() {
        return poids;
    }
    this.getPuissance = function() {
        return puissance;
    }
}



// alert("ok");