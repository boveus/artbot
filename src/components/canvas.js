import React, { Component } from 'react'
import ActionButton from './action-button.js'
import ShapeCreator from './shape-creator.js'
import RandomnessSlider from './randomness-slider.js'
import ViewportShapeDropdown from './viewport-shape-dropdown.js'
import AnimatedCheckbox from './animated-checkbox.js'
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
      randomness: '50',
      viewport: 'rectangle',
      animation: ''
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
      art: this.state.art + randomArt(this.state.randomness, this.state.animation)
    })
  }

  addCircle () {
    this.setState({
      art: this.state.art + circleHtml(this.state.randomness, this.state.animation)
    })
  }

  addRectangle () {
    this.setState({
      art: this.state.art + rectangleHtml(this.state.randomness, this.state.animation)
    })
  }

  addLine () {
    this.setState({
      art: this.state.art + lineHtml(this.state.randomness, this.state.animation)
    })
  }

  addPolyline () {
    this.setState({
      art: this.state.art + polylineHtml(this.state.randomness, this.state.animation)
    })
  }

  addSingleRandomShape () {
    let shapeArray = [polylineHtml(this.state.randomness, this.state.animation), lineHtml(this.state.randomness, this.state.animation), rectangleHtml(this.state.randomness, this.state.animation), circleHtml(this.state.randomness, this.state.animation)]
    let randomNumber = Math.floor(Math.random() * shapeArray.length)
    let shape = shapeArray[randomNumber]
    this.setState({
      art: this.state.art + shape
    })
  }

  setRandomness (event) {
    this.setState({
      randomness: event.target.value
    })
  }

  setViewport (event) {
    this.setState({
      viewport: event.target.value
    })
  }

  setAnimationState (event) {
    this.setState({
      animation: event.target.checked
    })
  }

  render () {
    return (
      <div>
        <ActionButton text='Clear Canvas' onClick={this.clearCanvas.bind(this)} />
        <ActionButton text='Random Art' onClick={this.randomArt.bind(this)} />
        <a href='/gallery.html'>
          <ActionButton text='Gallery' onClick={this.gallery.bind(this)} />
        </a>
        <div className='slidecontainer'>
          <h3> Animation </h3>
          <AnimatedCheckbox passBack={this.setAnimationState.bind(this)} />
        </div>
        <div className='slidecontainer'>
          <h3>Randomness</h3>
          <RandomnessSlider passBack={this.setRandomness.bind(this)} />
        </div>
        <ViewportShapeDropdown passBack={this.setViewport.bind(this)} />
        <div id='svg-area' className={this.state.viewport} >
          <svg className={this.state.viewport + ' border'} id='main-svg' dangerouslySetInnerHTML={{ __html: this.state.art }} />
        </div>
        <div className='container'>
          <ShapeCreator onClick={this.addCircle.bind(this)} shape="<circle cx='40' cy='40' r='40' />" />
          <ShapeCreator onClick={this.addRectangle.bind(this)} shape="<rect y='10' width='90' height='60' />" />
          <ShapeCreator onClick={this.addLine.bind(this)} shape="<line x1='20' y1='60' x2='60' y2='20' stroke-width='6' stroke='black' />" />
          <ShapeCreator onClick={this.addPolyline.bind(this)} shape="<polyline points='20,20 40,25 60,40 40,60' fill='none' stroke='black' stroke-width='5' />" />
          <div onClick={this.addSingleRandomShape.bind(this)} id='question-mark' >
            <div />
          </div>
        </div>

      </div>
    )
  }
}

export default Canvas