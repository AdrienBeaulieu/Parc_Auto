// création voiture 1
try {
    var voiture1 = new Voiture("AA - 000 - AA", "bleu", 2, 20)
} catch (e) {
    console.error(e.message);
}

console.log(voiture1);

console.log(voiture1.getCouleur());
console.log(voiture1.getImmat());
console.log(voiture1.getPoids());
console.log(voiture1.getPuissance());



// alert("ok");