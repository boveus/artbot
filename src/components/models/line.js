
import { getRandomRgb } from '../helpers/random-color.js'

class Line {
  constructor (randomness, animated) {
    let attributes = ['x1', 'x2', 'y1', 'y2', 'width', 'height']
    let randomnessModifier = randomness / 100
    this.x1 = Math.floor(Math.random() * 1500) + 1
    this.y1 = Math.floor(Math.random() * 1500) + 1
    this.x2 = Math.floor(Math.random() * 1500) + 1
    this.y2 = Math.floor(Math.random() * 1500) + 1
    this.height = Math.floor(Math.random() * 1500) + 1
    this.width = Math.floor(Math.random() * 1500) + 1
    this.stroke = getRandomRgb(randomnessModifier)
    this.stroke_width = Math.floor(Math.random() * (5 * randomnessModifier)) + 1
    this.fill = getRandomRgb(randomnessModifier)
    this.opacity = Math.random()
    this.animation_attr = attributes[(Math.floor(Math.random() * 5) + 1)]
    this.animation_from = Math.floor(Math.random() * (1500 * randomnessModifier)) + 1
    this.animation_to = Math.floor(Math.random() * (1500 * randomnessModifier)) + 1
    this.animation_dur = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
    this.animation_repeat = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
    this.animated = animated
  }
}

export { Line }
