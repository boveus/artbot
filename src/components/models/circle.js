import { getRandomRgb } from '../helpers/random-color.js'

class Circle {
  constructor (randomness, animated) {
    let attributes = ['cx', 'cy', 'cr']
    let randomnessModifier = randomness / 100
    this.x = Math.floor(Math.random() * 1500) + 1
    this.y = Math.floor(Math.random() * 1500) + 1
    this.radius = (Math.floor(Math.random() * (500 * randomnessModifier)) + 1)
    this.stroke = getRandomRgb(randomnessModifier)
    this.stroke_width = (Math.floor(Math.random() * (5 * randomnessModifier)) + 1)
    this.fill = getRandomRgb(randomnessModifier)
    this.opacity = Math.random()
    this.animation_attr = attributes[(Math.floor(Math.random() * 2) + 1)]
    this.animation_from = Math.floor(Math.random() * (1500 * randomnessModifier)) + 1
    this.animation_to = Math.floor(Math.random() * (1500 * randomnessModifier)) + 1
    this.animation_dur = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
    this.animation_repeat = Math.floor(Math.random() * (120 * randomnessModifier)) + 1
    this.animated = animated
  }
}

export { Circle }
