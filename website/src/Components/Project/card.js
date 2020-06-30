import React from 'react'
//import './card.css'
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

class Card extends React.Component{
  render(){
    return(
      <div className="card">
            <div className="face face1">
                <div className="content">
                    <img className="cardimg" src={require('./encrpt.jpg')} alt='lock'/>
                    <h3 className="cardheading">Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="cardinfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="cardbtn" href="#">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Card;
