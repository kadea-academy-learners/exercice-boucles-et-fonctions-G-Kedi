/*
  Énoncé :
  Écris une fonction nommée `saluer` qui prend un paramètre `nom`.
  - Si `nom` est fourni, afficher : "Bonjour, [nom]"
  - Si aucun nom n'est fourni, afficher : "Bonjour, inconnu"

  Signature attendue :
    function saluer(nom) -> void

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function saluer(nom) {
  if (nom) {
    console.log(`Bonjour, ${nom}`);
  } else {
    console.log("Bonjour, inconnu");
  }
}

// Ne pas modifier la ligne ci-dessous
module.exports = { saluer };
