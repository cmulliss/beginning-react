import React, { Component } from 'react'

class SimpleEvents extends Component {
  state = {
    inputText: '',
  }

  handleClick = () => {
    console.log('I clicked the button')
  }

  handleInputChange = (event) => {
    console.log('event.target.value', event.target.value)
    console.log('this.state.inputText', this.state.inputText)
  }
  render() {
    return (
      <div>
        <button className='ui blue button' onClick={this.handleClick}>
          Click me
        </button>
        <input
          className='ui focus input'
          type='text'
          placeholder='Enter text'
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default SimpleEvents
