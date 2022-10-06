export const convert = number => {
  let ans = ''

  if (number % 3 == 0) {
    ans += 'Pling'
  }

  if (number % 5 == 0) {
    ans += 'Plang'
  }

  if (number % 7 == 0) {
    ans += 'Plong'
  }

  if (ans == '') {
    return number.toString()
  }

  return ans
}
