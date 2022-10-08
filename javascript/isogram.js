export const isIsogram = input => {
  let word = input.toLowerCase().replaceAll(/[\s-]/g, '')
  let set = new Set([...word])
  return word.length == set.size
}
