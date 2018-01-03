import { Line } from '../models/line.js'

function lineHtml() {
  let line = new Line()
  let html = "<line "
  html += `x1='${line.x1}' y1='${line.y1}' x2='${line.x2}' y2='${line.y2}' stroke='${line.stroke}'`
  html += ` stroke-width='${line.stroke_width}' fill='${line.fill}' opacity='${line.opacity}'>`
  if (line.animated) {
    html += ` <animate attributetype="XML" attributename='${line.animation_attr}' from='${line.animation_from}' to='${line.animation_to}' dur='${line.animation_dur}' repeatcount='indefinite' />`
  }
  html += '</line>'
  return html
}

export { lineHtml }
