import React, { Component } from 'react'

class SimpleEvents extends Component {
  state = {
    message: '',
    imageWidth: '',
  }

  handleClick = () => {
    console.log('I clicked the button')
  }

  // usingsetState
  handleFocus = () => {
    this.setState({
      message: 'You agree to the terms of service by completing this form',
    })
  }

  clearMessage = () => {
    this.setState({
      message: '',
    })
  }

  loadImage = (event) => {
    console.dir(event.target.width)
    if (event.target.width > 100) {
      console.log('image too large')
    }
  }

  render() {
    return (
      <div>
        <h3 onMouseEnter={this.clearMessage}>{this.state.message}</h3>
        <img
          className='ui small right floated image'
          onLoad={this.state.loadImage}
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='react logo'
        />
        <input
          onFocus={this.handleFocus}
          className='ui focus input'
          type='text'
          placeholder='Enter text'
        />

        <button className='ui blue button' onClick={this.handleClick}>
          Click me
        </button>
      </div>
    )
  }
}

export default SimpleEvents
