import React, { Component } from 'react'

class CardSet extends Component {
  state = {
    chosenCards: [],
  }

  saveCourse = (event) => {
    console.log('User clicked a course')
  }

  render() {
    console.log('this.props.cards', this.props.cards)

    // the data that is being sent down, mapping through this.props.cards
    const cardList = this.props.cards.map((card, i) => {
      return (
        <div className='raised card' key={i} style={{ width: 200 }}>
          <div className='image'>
            <img src={card.image} alt='course logo' />
          </div>
          <div className='content'>
            <p className='header'>{card.course}</p>
            <p className='description'>{card.instructor}</p>
          </div>
          <div className='extra content'>
            <a href='#' style={{ color: 'brown' }}>
              £9.99
            </a>
          </div>
          <button onClick={this.saveCourse} className='ui primary button'>
            Save
          </button>
        </div>
      )
    })
    return <div className='ui cards'>{cardList}</div>
  }
}

export default CardSet

/*
in App.js, imported the cards from the data file, then set as props, and use as props inside CardSet.js: this.props.cards

This allows us to reuse Cardset with different data.

<div className="ui cards">
    <div className="ui card small">
        <div className="image">
            <img src={card.image} />
        </div>
        <div className="content">
            <p>{card.course}</p>
            <p>{card.instructor}</p>
        </div>
        <div className="extra content">
            <a href="#">$9.99</a>
        </div>
    </div>
</div>	
*/
