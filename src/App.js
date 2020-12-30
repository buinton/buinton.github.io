import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';





class Title extends React.Component {
  render(){
    return (
      <div className="title">
        <div className="name">
          Quinn Voronin
        </div>
        <div className="job">
          inventor
        </div>
        <div className="tagline">
          building solutions for the future
        </div>
        <button className="seemore">
          see more
        </button>
      </div>
    )
  }
}




function App() {
  return (

    <div className="app">
      <Title />
      <div className="header-img">
        <img src="/src/boys.png" alt="Quinn with 3 copies of himself looking into the camera"/>
      </div>
    </div>

  );
}

export default App;
