export { getRandomRgb }

function getRandomRgb (randomness) {
  let num = Math.round(0xffffff * Math.random()) * randomness
  let r = num >> 16
  let g = num >> 8 & 255
  let b = num & 255
  return `rgb(${r},${g},${b})`
}
