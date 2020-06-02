import React from 'react';
import './bar.css';
import Navlink from './navlink.js';
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

class bar extends React.Component{

  addClass(){
    var doc = document.getElementById('list');

    if (doc.className === '')
     doc.className += 'responsive';
    else
      doc.className = '';
  }

  render(){
    return(
     <div id='bar'>
        <ul id='list'>
         <Navlink name='About'/>
         <Navlink name='Projects'/>
         <Navlink name='Education'/>
         <Navlink name="Let's talk"/>
        </ul>

         <a className="hambuger" onClick={this.addClass}>
          <i className="fa fa-bars"></i>
         </a>
      </div>
    )
  }
}

export default bar;
