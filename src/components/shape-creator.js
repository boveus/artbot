import React, { Component } from 'react'

class ShapeCreator extends Component {
  render () {
    return (
      <div onClick={this.props.onClick}>
        <svg dangerouslySetInnerHTML={{ __html: this.props.shape }} />
      </div>
    )
  }
}

export default ShapeCreator
