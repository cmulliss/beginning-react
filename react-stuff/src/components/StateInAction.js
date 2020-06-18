import React, { Component } from 'react'

class StateInAction extends Component {
  state = {
    text: 'state in action',
  }
  //     setTimeout(() => {
  //       this.setState({
  //         text: 'state changed',
  //       })
  //     }, 2000)
  //   }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default StateInAction

// to use state, need a constructor, which runs one time, sends content of render.
