import React from 'react';

function Navlink(props){
  return (
    <li><a href={props.href}>{props.name}</a></li>
  )
}

export default Navlink;
