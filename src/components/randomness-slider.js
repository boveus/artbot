import React, { Component } from 'react'

class RandomnessSlider extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     value: '50'
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }
  // handleChange (event) {
  //   this.setState({value: event.target.value})
  // }

  render () {
    return (
      <input
        className='slider'
        id='randomness-slider'
        type='range'
        min='1'
        max='100'
        onChange={console.log('slider')}
        ref={this.props.slider}
     />

    )
  }
}

export default RandomnessSlider
