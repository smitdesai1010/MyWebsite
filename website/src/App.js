import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/bar.js'
import Home from './Components/Home/Home.js'

class App extends React.Component{
  render(){
    return (
       <div className='main'>
          <Navbar/>
          <Home/>
       </div>
    );
  }
}

export default App;
