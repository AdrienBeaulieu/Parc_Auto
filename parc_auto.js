// création voiture 1
try {
    var voiture1 = new Voiture("AA - 000 - AA", "bleu", 2, 20,60,5)
} catch (e) {
    console.error(e.message);
}

console.log(voiture1);

console.log(voiture1.getCouleur());
console.log(voiture1.getImmat());
console.log(voiture1.getPoids());
console.log(voiture1.getPuissance());
console.log(voiture1.getCapReservoir());
console.log(voiture1.getNbrPlaces());
console.log(voiture1.mettreEssence(voiture1, 5));

 

// // création voiture 2
// try {
//     var voiture2 = new Voiture("BB - 001 - BB", "rouge", 800, 120, 61.7, 3)
// } catch (e) {
//     console.error(e.message);
// }

// // création voiture 3
// try {
//     var voiture3 = new Voiture("CC - 002 - CC", "noire", 850, 113, 54.1, 3)
// } catch (e) {
//     console.error(e.message);
// }

// // création voiture 4
// try {
//     var voiture4 = new Voiture("DD - 003 - DD", "grise", 1200, 103, 55.4, 5)
// } catch (e) {
//     console.error(e.message);
// }

// // Affichage des voitures
// console.log(voiture1.toString());
// console.log(voiture2.toString());
// console.log(voiture3.toString());
// console.log(voiture4.toString());

// // Création d'un tableau stockant les voitures
// var tTableau = [voiture1, voiture2, voiture3, voiture4];
// console.table(tTableau);
// // Boucle affichage si la voiture est assurée
// for (let i = 0; i < tTableau.length; i++) {
//     console.log(tTableau[i].assure);

// }

// //jeux de test


// // si c'est un nombre
// try {
//     var voiture1 = new Voiture("AA - 000 - AA", 0);

// } catch (e) {
//     console.error(e.message);
// }


// //rien

// try {
//     var voiture1 = new Voiture("AA - 000 - AA");

// } catch (e) {
//     console.error(e.message);
// }

// //deux caractères
// try {
//     var voiture1 = new Voiture("AA - 000 - AA", "bl", 750, 110, 50.3, 5);

// } catch (e) {
//     console.error(e.message);
// }


// // meme couleur
// try {
//     var voiture1 = new Voiture("AA - 000 - AA", "bleu", 750, 110, 50.3, 5);

// } catch (e) {
//     console.error(e.message);
// }

// // nouvelle couleur
// try {
//     var voiture1 = new Voiture("AA - 000 - AA", "bleu", 750, 110, 50.3, 5);

// } catch (e) {
//     console.error(e.message);
// }


// alert("ok");