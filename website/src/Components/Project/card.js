import React from 'react'
import './card.css'
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

class Card extends React.Component{

  onItemClick() {
    var doc = document.get
}

  render(){
    return(
        <div className='card'>
          <div className='visible'>
             <img className='img' src={require('./encrpt.jpg')} alt='lock'/>
              <div className='span'>
                 <div className='header'>
                       <div className='heading'>Encrypt.io</div>
                       <ul className='technologies'>
                           <div className='tech'>C++</div>
                       </ul>
                 </div>
                 <div className='plus'>
                      <i onClick={this.onItemClick} className="fa fa-plus-circle"></i>
                 </div>
               </div>
            </div>

            <div className='hidden'>
               <p className='details'> Hey this is the project which i made. it using 128 bit AES Encryption </p>
            </div>
        </div>
    )
  }
}

export default Card;
