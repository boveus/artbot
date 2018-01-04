import React, { Component } from 'react'

class RandomnessSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '50'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  render () {
    return (
      <div className='slidecontainer'>
        <input
          className='slider'
          id='randomness-slider'
          type='range'
          min='1'
          max='100'
          value={this.state.value}
          onChange={this.handleChange}
         />
      </div>
    )
  }
}

export default RandomnessSlider
