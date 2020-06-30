import React from 'react'
import './Project.css'
import Card from './card.js'

class Project extends React.Component{
  render(){
    return(
      <div id='project'>
       <div className='container'>
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}

export default Project;
