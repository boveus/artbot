import { Circle } from '../models/circle.js'

function circleHtml () {
  let circle = new Circle()
  let html = '<circle '
  html += `cx='${circle.x}' cy='${circle.y}' r='${circle.radius}' stroke='${circle.stroke}'`
  html += ` stroke-width='${circle.stroke_width}' fill='${circle.fill}' opacity='${circle.opacity}'>`
  if (circle.animated) {
    html += ` <animate attributetype="XML" attributename='${circle.animation_attr}' from='${circle.animation_from}' to='${circle.animation_to}' dur='${circle.animation_dur}' repeatcount='indefinite' />`
  }
  html += '</circle>'
  return html
}

export { circleHtml }
