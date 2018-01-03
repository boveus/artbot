 import { getRandomRgb } from '../helpers/random-color.js'
 import { createPoints } from '../helpers/create-points.js'

 class Polyline {
   constructor () {
     this.points = createPoints(Math.floor(Math.random() * 100) + 1)
     this.stroke = getRandomRgb()
     this.stroke_width = Math.floor(Math.random() * 5) + 1
     this.fill = 'none'
     // this.opacity = Math.random()
   }
}

 export { Polyline }
