import { Polyline } from '../models/polyline.js'

function polylineHtml () {
  let polyline = new Polyline()
  let html = '<polyline '
  html += `points='${polyline.points}' stroke='${polyline.stroke}'`
  html += ` stroke-width='${polyline.stroke_width}' fill='${polyline.fill}' opacity='${polyline.opacity}'>`
  if (polyline.animated) {
    html += ` <animate attributetype="XML" attributename='${polyline.animation_attr}' from='${polyline.animation_from}' to='${polyline.animation_to}' dur='${polyline.animation_dur}' repeatcount='indefinite' />`
  }
  html += '</polyline>'
  return html
}

export { polylineHtml }
