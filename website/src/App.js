import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/bar.js'
import Home from './Components/Home/Home.js'
import Contact from './Components/Contact/Contact.js'
import Project from './Components/Project/Project.js'

class App extends React.Component{
  render(){
    return (
       <div className='main'>
          <Navbar/>
          <Home/>
          <Project/>
          <Contact/>
       </div>
    );
  }
}

export default App;
