import React, { Component } from 'react'

class ViewportShapeDropdown extends Component {
  render () {
    return (
      <form onChange={this.props.passBack}>
        <p>
          <label>Viewport Shape</label>
          <select id='viewport-shape'>
            <option value='rectangle'>Rectangle</option>
            <option value='oval'>Oval</option>
          </select>
        </p>
      </form>
    )
  }
}

export default ViewportShapeDropdown
