import React, { Component } from 'react'

class AnimatedCheckbox extends Component {
  render () {
    return (
      <section title='.checkbox'>
        <div className='checkbox'>
          <label htmlFor='checkbox' />
          <input type='checkbox' value='None' id='checkbox' name='check' onChange={this.props.passBack} />
        </div>
      </section>
    )
  }
}

export default AnimatedCheckbox
