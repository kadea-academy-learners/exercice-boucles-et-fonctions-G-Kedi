/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Vérifier que n est bien un nombre valide
  if (typeof n !== "number" || isNaN(n)) return null;

  // Vérifier que c'est un entier
  if (!Number.isInteger(n)) return false;

  return n % 2 !== 0;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
