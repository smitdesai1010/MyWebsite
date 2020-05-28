import React from 'react';
import './bar.css';
import Navlink from './navlink.js';
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

function bar(){
  return(
    <ul id='bar'>
     <Navlink name='About'/>
     <Navlink name='Projects'/>
     <Navlink name='Education'/>
     <Navlink name="Let's talk"/>

     <div className="hambuger">
      <i className="fa fa-bars"></i>
     </div>

    </ul>
  )
}

export default bar;
