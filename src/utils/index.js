// Méthode qui attend un tableau d'objet contenant une position
// Renvoie la valeurs la plus haute de la position + 1

const position = (array) => {
  // Si le tableau est vide, je revoie la position 1
  if (array.length === 0) {
    return 1;
  }
  const listPosition = array.map((item) => item.position);
  const maxPosition = Math.max(...listPosition) + 1;

  return maxPosition;
};

export default position;
