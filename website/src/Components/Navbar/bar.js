import React from 'react';
import './bar.css';
import Navlink from './navlink.js';
import 'E:/Workspace/Personal-Website/website/node_modules/font-awesome/css/font-awesome.min.css';

class bar extends React.Component{

  addClass(){
    var doc = document.getElementById('list');
    var bar = document.getElementById('bar');

    if (doc.className === ''){
      doc.className += 'responsive';
      bar.className += 'responsive';
    }

    else{
      doc.className = '';
      bar.className = '';
    }
  }

  render(){
    return(
     <div id='bar'>
        <ul id='name'>
         <Navlink name='Smit Desai' href='#'/>
        </ul>

        <ul id='list'>
         <Navlink name='Home' href='#home'/>
         <Navlink name='About' href='#about'/>
         <Navlink name='Projects' href='#project'/>
         <Navlink name="Let's talk" href='#contact'/>
        </ul>

         <a className="hambuger" onClick={this.addClass}>
          <i className="fa fa-bars"></i>
         </a>
      </div>
    )
  }
}

export default bar;
