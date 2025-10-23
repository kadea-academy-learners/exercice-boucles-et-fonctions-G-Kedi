/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Vérifier que deux arguments ont été fournis
  if (arguments.length !== 2) return null;

  // Vérifier que a et b sont bien des nombres valides
  if (typeof a !== "number" || typeof b !== "number") return null;
  if (isNaN(a) || isNaN(b)) return null;

  // Si les deux nombres sont égaux
  if (a === b) return "Les deux nombres sont égaux";

  // Sinon, retourner le plus grand
  return a > b ? a : b;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { max };
