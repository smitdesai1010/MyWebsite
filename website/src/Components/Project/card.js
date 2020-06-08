import React from 'react'
import './card.css'
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

class Card extends React.Component{
  render(){
    return(
        <div className='card'>
         <img className='img' src={require('./encrpt.jpg')} alt='lock'/>
         <div className='span'>
           <div className='header'>
             <div className='heading'>Encrypt.io</div>
             <ul className='technologies'>
               <div className='tech'>C++</div>
             </ul>
           </div>
           <div className='plus'>
            <i className="fa fa-plus-circle"></i>
           </div>
         </div>
        </div>
    )
  }
}

export default Card;
