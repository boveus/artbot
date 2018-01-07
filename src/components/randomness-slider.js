import React, { Component } from 'react'

class RandomnessSlider extends Component {
  render () {
    return (
      <input
        className='slider'
        id='randomness-slider'
        type='range'
        min='1'
        max='100'
        onChange={this.props.passBack}
     />

    )
  }
}

export default RandomnessSlider
