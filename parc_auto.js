// création voiture 1
try {
    var voiture1 = new Voiture("AA - 000 - AA", "bleu", 2, 90, 50.3, 5)
} catch (e) {
    console.error(e.message);
}

console.log(voiture1);

console.log(voiture1.getCouleur());
console.log(voiture1.getImmat());
console.log(voiture1.getPoids());



// alert("ok");