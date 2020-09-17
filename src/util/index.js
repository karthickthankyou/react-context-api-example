export const centsToDollar = (cents) => {
  return `$${(cents / 100).toFixed(2)}`
}
