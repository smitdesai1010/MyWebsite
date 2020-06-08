import React from 'react';

function Navlink(props){
  return (
    <li>
     <a className='navlink' href={props.href}> {props.name} </a>
    </li>
  )
}

export default Navlink;
