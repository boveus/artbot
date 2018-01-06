export { createPoints }

function createPoints (num) {
  let points = ''
  let points2 = ''
  let times = Math.floor(Math.random() * num) + 1
  for (var i = 0; i < times; i++) {
    let x1 = Math.floor(Math.random() * 1500) + 1
    let y1 = Math.floor(Math.random() * 1500) + 1
    points += `${x1},${y1} `
    if (i % times === 0) {
      let x2 = x1 + Math.floor(Math.random() * 1500) + 1
      let y2 = y1 + Math.floor(Math.random() * 100) + 1
      points2 += `${x2}, ${y2} `
    } else if (i % 2 === 0) {
      let x2 = x1 - Math.floor(Math.random() * 1500) + 1
      let y2 = y1 - Math.floor(Math.random() * 100) + 1
      points2 += `${x2}, ${y2} `
    } else {
      let x2 = x1 + 5
      let y2 = y1 + 5
      points2 += `${x2}, ${y2} `
    }
  }
  return [points.trim(), points2.trim()]
}
