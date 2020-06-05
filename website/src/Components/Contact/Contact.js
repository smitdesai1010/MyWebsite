import React from 'react'
import './Contact.css'
import Icon from './icon.js'

class Contact extends React.Component{
  render(){
    return (
       <div id='contact'>
         <h2 id='text'>Let's Connect</h2>

         <div className='icons'>
          <Icon name='linkedin' href='https://www.linkedin.com/in/smitdesai1010/'/>
          <Icon name='github' href='https://github.com/smitdesai1010'/>
          <Icon name='envelope' href='mailto:smitdesai1010@gmail.com'/>
          <Icon name='instagram' href='https://www.instagram.com/smit_1010/'/>
          <Icon name='phone' href='tel:+1-514-430-1921'/>
         </div>
       </div>
    )
  }
}

export default Contact;
