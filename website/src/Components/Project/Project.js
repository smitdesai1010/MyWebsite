import React from 'react'
import './Project.css'
import Card from './card.js'
import data from './data.json'


const Cards = data.projects.map( project =>{
  return(
    <Card name={project.name}
          pic={project.pic}
          info={project.info}
          tech={project.tech}
    />
  )
} )

class Project extends React.Component{
  render(){
    return(
      <div id='project'>
       <div className='box'>
          {Cards}
        </div>
      </div>
    )
  }
}

export default Project;
