export const centsToDollar = (cents) => {
  return `$${(cents / 100).toFixed(2)}`
}

export const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
