export function timeToMixJuice(name) {
  if (name == 'Pure Strawberry Joy') {
    return 0.5
  }

  if (name == 'Energizer' || name == 'Green Garden') {
    return 1.5
  }

  if (name == 'Tropical Island') {
    return 3
  }

  if (name == 'All or Nothing') {
    return 5
  }

  return 2.5
}

export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded == 0) {
    return 0
  }

  let needs = 0
  let cut = 0

  for (let lime of limes) {
    cut++

    if (lime == 'small') {
      needs += 6
    } else if (lime == 'medium') {
      needs += 8
    } else if (lime == 'large') {
      needs += 10
    }

    if (needs >= wedgesNeeded) {
      return cut
    }
  }

  return cut
}

export function remainingOrders(timeLeft, orders) {
  let time = 0
  for (let i = 0; i < orders.length; i++) {
    time += timeToMixJuice(orders[i])
    if (time >= timeLeft) {
      return orders.slice(i + 1)
    }
  }

  return []
}
