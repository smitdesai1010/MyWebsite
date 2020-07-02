import React from 'react'
import './card.css'

class Card extends React.Component{
  render(){
    return(
      <div className="flip-card" onClick={"this.classList.toggle('hover')"}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="cardimg" src={require('./Pictures/'+this.props.pic+'.jpg')}/>
              <h3>{this.props.name}</h3>
            </div>

            <div className="flip-card-back">
              <p className="info">{this.props.info}</p>
              <p className="languages">
                <b>Technologies used: </b>
                {this.props.tech}
              </p>
              <button className="cardbtn">Read more</button>
            </div>
        </div>
     </div>
    )
  }
}

export default Card;
