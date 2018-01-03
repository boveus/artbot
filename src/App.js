import React, { Component } from 'react'
import './App.css'
import Canvas from './components/canvas'

class App extends Component {
  render () {
    return (
      <Canvas initialArt='<svg></svg>' />
    )
  }
}

export default App
