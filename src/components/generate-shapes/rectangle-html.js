import { Rectangle } from '../models/rectangle.js'

function rectangleHtml () {
  let rectangle = new Rectangle()
  let html = '<rect '
  html += `x='${rectangle.x}' y='${rectangle.y}' height='${rectangle.height}' width='${rectangle.width}' stroke='${rectangle.stroke}'`
  html += ` stroke-width='${rectangle.stroke_width}' fill='${rectangle.fill}' opacity='${rectangle.opacity}'>`
  if (rectangle.animated) {
    html += ` <animate attributetype="XML" attributename='${rectangle.animation_attr}' from='${rectangle.animation_from}' to='${rectangle.animation_to}' dur='${rectangle.animation_dur}' repeatcount='indefinite' />`
  }
  html += '</rect>'
  return html
}

export { rectangleHtml }
