import React from 'react'
import './icon.css'
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';


function Icon(props){
  return(
     <a className='links' href={props.href} rel="noopener noreferrer" target="_blank">
      <i className={"icon fa fa-"+props.name}></i>
     </a>
  )
}

export default Icon;
