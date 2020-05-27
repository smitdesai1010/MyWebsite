import React from 'react';
import './bar.css';
import Navlink from './navlink.js';

function bar(){
  return(
    <ul id='bar'>
     <Navlink name='About'/>
     <Navlink name='Projects'/>
     <Navlink name='Education'/>
     <Navlink name="Let's talk"/>
    </ul>
  )
}

export default bar;
