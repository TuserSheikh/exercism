export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((a, c) => a + c)
}

export function birdsInWeek(birdsPerDay, week) {
  let startDay = 7 * week - 7
  let endDay = startDay + 7
  return birdsPerDay.slice(startDay, endDay).reduce((a, c) => a + c)
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) {
      birdsPerDay[i]++
    }
  }

  return birdsPerDay
}
