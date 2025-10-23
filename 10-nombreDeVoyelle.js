/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Vérifier que la phrase est bien une chaîne de caractères
  if (typeof phrase !== "string") return 0;

  // Définir les voyelles (insensible à la casse)
  const voyelles = ["a", "e", "i", "o", "u", "y"];

  let compteur = 0;
  for (const char of phrase.toLowerCase()) {
    if (voyelles.includes(char)) {
      compteur++;
    }
  }

  return compteur;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles };
