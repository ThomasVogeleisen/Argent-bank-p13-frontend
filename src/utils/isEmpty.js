/**
 * Vérifie si une valeur est vide.
 *
 * @param {*} value - La valeur à vérifier.
 * @returns {boolean} - Renvoie `true` si la valeur est vide, sinon `false`.
 */

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
