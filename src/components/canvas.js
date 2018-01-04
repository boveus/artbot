import React, { Component } from 'react'
import ActionButton from './action-button.js'
import ShapeCreator from './shape-creator.js'
import RandomnessSlider from './randomness-slider.js'
import { circleHtml } from './generate-shapes/circle-html.js'
import { rectangleHtml } from './generate-shapes/rectangle-html.js'
import { lineHtml } from './generate-shapes/line-html.js'
import { polylineHtml } from './generate-shapes/polyline-html.js'
import { randomArt } from './helpers/random-art.js'

class Canvas extends Component {
  constructor (props) {
    super(props)
    this.state = {
      art: this.props.initialArt,
      randomness: '50'
    }
  }

  clearCanvas () {
    this.setState({
      art: '<svg></svg>'
    })
  }

  gallery () {
  }

  randomArt () {
    this.setState({
      art: this.state.art + randomArt()
    })
  }

  addCircle () {
    this.setState({
      art: this.state.art + circleHtml()
    })
  }

  addRectangle () {
    this.setState({
      art: this.state.art + rectangleHtml()
    })
  }

  addLine () {
    this.setState({
      art: this.state.art + lineHtml()
    })
  }

  addPolyline () {
    this.setState({
      art: this.state.art + polylineHtml()
    })
  }

  addSingleRandomShape () {
    let shapeArray = [polylineHtml(), lineHtml(), rectangleHtml(), circleHtml()]
    let randomNumber = Math.floor(Math.random() * shapeArray.length)
    let shape = shapeArray[randomNumber]
    this.setState({
      art: this.state.art + shape
    })
  }

  // setRandomness () {
  //   this.setState({
  //     randomness: '50'
  //   })
  //   console.log(this.state.randomness)
  // }

  render () {
    return (
      <div>
        <ActionButton text='Clear Canvas' onClick={this.clearCanvas.bind(this)} />
        <ActionButton text='Random Art' onClick={this.randomArt.bind(this)} />
        <a href='/gallery.html'>
          <ActionButton text='Gallery' onClick={this.gallery.bind(this)} />
        </a>
        <div id='svg-area'>
          <svg className='border' id='main-svg' dangerouslySetInnerHTML={{ __html: this.state.art }} />
        </div>
        <div className='container'>
          <ShapeCreator onClick={this.addCircle.bind(this)} shape="<circle cx='25' cy='25' r='25' />" />
          <ShapeCreator onClick={this.addRectangle.bind(this)} shape="<rect width='50' height='40' />" />
          <ShapeCreator onClick={this.addLine.bind(this)} shape="<line x1='20' y1='60' x2='60' y2='20' stroke-width='6' stroke='black' />" />
          <ShapeCreator onClick={this.addPolyline.bind(this)} shape="<polyline points='20,20 40,25 60,40 40,60' fill='none' stroke='black' stroke-width='5' />" />
          <div onClick={this.addSingleRandomShape.bind(this)}>
            <div id='question-mark' />
          </div>
        </div>
        <h1>Randomness</h1>
        <RandomnessSlider />
      </div>
    )
  }
}

export default Canvas
