export function formatPrice (input) {
  return input.toFixed(2) + ' Kč'
}

export function addStars (input, count = 3) {
  return `${'*'.repeat(count)} ${input} ${'*'.repeat(count)}`
}
