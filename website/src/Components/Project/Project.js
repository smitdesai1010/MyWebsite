import React from 'react'
import './Project.css'
import Card from './card.js'

class Project extends React.Component{
  render(){
    return(
      <div id='project'>
       <div className='box'>
          <Card name='Encrpt.io' pic='encrpt'/>
          <Card name='Encrpt.io' pic='encrpt'/>
          <Card name='Encrpt.io' pic='encrpt'/>
        </div>
      </div>
    )
  }
}

export default Project;
