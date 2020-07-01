import React from 'react'
import './card.css'

class Card extends React.Component{
  render(){
    return(
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="cardimg" src={require('./Pictures/'+this.props.pic+'.jpg')}/>
              <h3>{this.props.name}</h3>
            </div>

            <div className="flip-card-back">
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
              <button>Read more</button>
            </div>
        </div>
     </div>
    )
  }
}

export default Card;
