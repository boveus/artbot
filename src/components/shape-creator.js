import React, { Component } from 'react'

class ShapeCreator extends Component {
  render () {
    return (
      <div onClick={this.props.onClick}>
        <svg dangerouslySetInnerHTML={{ __html: this.props.shape }} viewBox='0 0 90 90' />
      </div>
    )
  }
}

export default ShapeCreator
