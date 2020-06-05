import React from 'react'
import './Contact.css'
import Icon from './icon.js'

class Contact extends React.Component{
  render(){
    return (
       <div id='contact'>
         <h2 id='text'>Hey Let's Connect</h2>

         <div className='icons'>
          <Icon/>
          <Icon/>
         </div>
       </div>
    )
  }
}

export default Contact;
