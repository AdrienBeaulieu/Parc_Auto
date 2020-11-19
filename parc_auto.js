// création voiture 1
try {
    var voiture1 = new Voiture("AA - 000 - AA", "bleu", 2, 20,60,5)
} catch (e) {
    console.error(e.message);
}

// création voiture 2
try {
    var voiture2 = new Voiture("BB - 001 - BB", "rouge", 800, 120, 61.7, 3)
} catch (e) {
    console.error(e.message);
}
var tTableau = [voiture1, voiture2];

for(let i = 0; i < tTableau.length; i++) {
    
    console.log("\nVoiture " + (i+1));
    console.log(tTableau[i].getmsg());
    console.log(tTableau[i].toString());
    console.log(tTableau[i].mettreEssence(5));
    voiture1.repeindre("violet");
    voiture1.seDeplacer(50, 130);
}
 

//jeux de test

console.log("\ncouleur");
// si c'est un nombre
try {
    var voiture1 = new Voiture("AA - 000 - AA", 0);

} catch (e) {
    console.error(e.message);
}


//rien

try {
    var voiture1 = new Voiture("AA - 000 - AA");

} catch (e) {
    console.error(e.message);
}

//deux caractères
try {
    var voiture1 = new Voiture("AA - 000 - AA", "b", 750, 110, 50.3, 5);

} catch (e) {
    console.error(e.message);
}


// meme couleur
try {
    var voiture1 = new Voiture("AA - 000 - AA", "bleu", 750, 110, 50.3, 5);

} catch (e) {
    console.error(e.message);
}

// nouvelle couleur
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, 50.3, 5);

} catch (e) {
    console.error(e.message);
}

//POIDS
console.log("\npoids");
//si vide
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert");
} catch (e) {
    console.error(e.message);
}

//si negatif
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", -1);

} catch (e) {
    console.error(e.message);
}

//si isNan
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", "ok");

} catch (e) {
    console.error(e.message);
}

//PUISSANCE
console.log("\npuissance");
//si vide
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750);

} catch (e) {
    console.error(e.message);
}

//si isNan
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, "ok");

} catch (e) {
    console.error(e.message);
}

//si neg
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, -1);

} catch (e) {
    console.error(e.message);
}

//RESERVOIR
console.log("\nreservoir");
//rien
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110);

} catch (e) {
    console.error(e.message);
}
//isNan
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, "ok");

} catch (e) {
    console.error(e.message);
}
//neg
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, -1);

} catch (e) {
    console.error(e.message);
}

//NBPLACE
console.log("\nplace");
//vide
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, 50.3);

} catch (e) {
    console.error(e.message);
}
//isNan
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, 50.3, "ok");

} catch (e) {
    console.error(e.message);
}

//en dessous de 1
try {
    var voiture1 = new Voiture("AA - 000 - AA", "vert", 750, 110, 50.3, 0);

} catch (e) {
    console.error(e.message);
}

//PLAQUE IMMAT
console.log("\nimmat");
// <2 caractère
try {
    var voiture1 = new Voiture("d", "vert", 750, 110, 50.3, 0);

} catch (e) {
    console.error(e.message);
}
//si nbr
try {
    var voiture1 = new Voiture(15);

} catch (e) {
    console.error(e.message);
}
//si vide
try {
    var voiture1 = new Voiture();

} catch (e) {
    console.error(e.message);
}