import React from 'react'

import './App.css'
// import SimpleEvents from './SimpleEvents'
import CardSet from './CardSet'
import cards from '../carddata'
console.log('cards', cards)

const App = () => {
  return (
    <div className='container' style={{ marginTop: 20 }}>
      <div>
        <CardSet cards={cards} />
      </div>
    </div>
  )
}

export default App

/*
imported the cards from the data file, then set as props, and use as props inside CardSet.js: this.props.cards
*/
