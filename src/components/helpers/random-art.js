import { circleHtml } from '../generate-shapes/circle-html.js'
import { rectangleHtml } from '../generate-shapes/rectangle-html.js'
import { lineHtml } from '../generate-shapes/line-html.js'
import { polylineHtml } from '../generate-shapes/polyline-html.js'

function randomArt () {
  let html = ''
  let times = Math.floor(Math.random() * 10) + 1
  for (var i = 0; i < times; i++) {
    html += rectangleHtml()
    html += circleHtml()
    html += lineHtml()
    html += polylineHtml()
  }
  return html
}

export { randomArt }
