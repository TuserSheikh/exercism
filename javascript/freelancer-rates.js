const WORK_HOUR_A_DAY = 8
const MONTH_HAS_BILLABLE_DAYS = 22

export function dayRate(ratePerHour) {
  return ratePerHour * WORK_HOUR_A_DAY
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / ratePerHour / WORK_HOUR_A_DAY)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let dayWithoutDiscount = numDays % MONTH_HAS_BILLABLE_DAYS
  let dayWithDiscount = numDays - dayWithoutDiscount

  let beforeDiscount = dayWithDiscount * WORK_HOUR_A_DAY * ratePerHour
  let amountAfterDiscount = beforeDiscount - beforeDiscount * discount

  let amountWithoutDiscount = dayWithoutDiscount * WORK_HOUR_A_DAY * ratePerHour

  return Math.ceil(amountAfterDiscount + amountWithoutDiscount)
}
