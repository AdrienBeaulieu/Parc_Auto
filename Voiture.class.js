function Voiture(uneImmatriculation, uneCouleur, unPoids, unePuissance, uneCapRéservoir,unNbrPlaces) {


    var immatriculation = uneImmatriculation; // string
    var couleur = uneCouleur; // string
    var poids = unPoids; // int
    var puissance = unePuissance; // int
    var capaciteReservoir = uneCapRéservoir; //float
    var nbrPlaces = unNbrPlaces; //float
    this.assure = false; // bool has a default setting ( false )
    var msg = "Bienvenue à bord du véhicule"; // string has a defautl setting
    var tauxReservoir = 5;

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
        puissance = unePuissance;
    }

    this.setCapaciteReservoir = function(uneCapRéservoir) {
        if(isNaN(uneCapRéservoir)) throw new Error("Veuillez entrer un nombre.");
        if(uneCapRéservoir < 0) throw new Error("Veuillez entrer une valeur de capacité de réservoir positive.");
        capaciteReservoir = uneCapRéservoir;
    }

    this.setNbrPlaces = function(unNbrPlaces) {
        if(isNaN(unNbrPlaces)) throw new Error("Veuillez entrer un nombre.");
        if(unNbrPlaces < 1) throw new Error("Veuillez entrer une valeur de capacité de place supérieur à 1.");
        nbrPlaces = unNbrPlaces;
    }

    this.setMsg = function(message) {
        if(!msg) throw new Error("");
        msg = message;
    }

    this.setTauxReservoir = function(NewtauxReservoir) {
        tauxReservoir = NewtauxReservoir; 
    }


    // Set
    this.setImmat(uneImmatriculation);
    this.setCouleur(uneCouleur);
    this.setPoids(unPoids);
    this.setPuissance(unePuissance);
    this.setCapaciteReservoir(uneCapRéservoir);
    this.setNbrPlaces(unNbrPlaces);


    // GETS
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
    this.getCapReservoir = function() {
        return capaciteReservoir;
    }
    this.getNbrPlaces = function() {
        return nbrPlaces;
    }
    this.getmsg = function() {
        return msg;
    }
    this.getTauxReservoir = function() {
        return tauxReservoir;
    }
    
    // Méthodes 

    // Permet de rajouter de l'essence dans sa voiture. Retourne la quantité nouvelle du reservoir
    // In : Object
    // In : int 
    // Out : Int
    this.mettreEssence = function(litres) {
        if(capaciteReservoir < litres) throw new Error("Le réservoir est trop petit.");
        if(capaciteReservoir === tauxReservoir) throw new Error("Le réservoir est déjà plein");
        if(tauxReservoir + litres == capaciteReservoir) throw new Error("Le reservoir n'est pas assez vide pour cette quantité");
        tauxReservoir = (tauxReservoir + litres);
        msg = ("Vous avez ajouté " + litres + " litres à votre réservoir");
        console.log(msg);

        return tauxReservoir;
    }

    this.repeindre = function (newcouleur) {

        if (newcouleur == couleur) {
            msg = ("Merci pour le rafraîchissement.");
        }
        if (newcouleur !== couleur) {
            couleur = newcouleur;
            msg = ("La nouvelle couleur est " + newcouleur);
        }
        console.log(msg);
    }

    // Méthode toString();
    this.toString = function() {
        return "Immatriculation : " + immatriculation + " couleur : " + couleur + " poids : " + poids + " puissance : " + puissance + 
        " Capacité du rerservoir : " + capaciteReservoir  + " Nombre de places : " + nbrPlaces + " Assuré : " + this.assure + " Taux rerservoir : " + tauxReservoir;
    }

    // Calcul moyenne consommation véhicule
    var calculerMoy = function(distance,consoMoy) {
        var conso = distance*consoMoy/100
        return conso;
    }

    // Méthode
    this.seDeplacer = function(distance, vitesseMoy) {
        if(vitesseMoy < 50) var conso =  calculerMoy(distance, 10);
        if(vitesseMoy < 90 && vitesseMoy >= 50) var conso = calculerMoy(distance, 5);
        if(vitesseMoy < 130 && vitesseMoy >= 90) var conso = calculerMoy(distance, 8);
        if(vitesseMoy >= 130) var conso = calculerMoy(distance, 12);

        if(conso > tauxReservoir) msg = "Vous n'avez pas assez d'essence pour ce trajet";

        if(conso == tauxReservoir) {
            tauxReservoir = tauxReservoir - conso;
            msg = "Vous avez tout juste ce qu'il faut d'essence pour le trahet";
        } 
        if(conso < tauxReservoir) {
            tauxReservoir = tauxReservoir - conso;
             msg = "Vous avez assez d'essence pour ce trajet";    
        }
        console.log(msg);
    }

    
}



// alert("ok");