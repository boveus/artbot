import React, { Component } from 'react'

class AnimatedCheckbox extends Component {
  render () {
    return (
      <div>
        <section title='.checkbox'>
          <div className='checkbox'>
            <input type='checkbox' value='None' id='checkbox' name='check' onChange={this.props.passBack} />
            <label htmlFor='checkbox' />
          </div>
        </section>
      </div>
    )
  }
}

export default AnimatedCheckbox
