 import { getRandomRgb } from '../helpers/random-color.js'
 import { createPoints } from '../helpers/create-points.js'

 class Polyline {
   constructor (randomness, animated) {
     let randomnessModifier = randomness / 100
     let numberOfPoints = Math.floor(Math.random() * 100) + 1
     this.points = createPoints(numberOfPoints)[0]
     this.stroke = getRandomRgb(randomnessModifier)
     this.stroke_width = Math.floor(Math.random() * 5) + 1
     this.fill = 'none'
     this.opacity = Math.random()
     this.animation_attr = 'points'
     // this.animation_from = createPoints(numberOfPoints)[0]
     this.animation_to = createPoints(numberOfPoints)[1]
     this.animation_dur = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
     this.animation_repeat = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
     this.animated = animated
   }
}

 export { Polyline }
