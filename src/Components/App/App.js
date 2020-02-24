import React, { Component } from 'react';
import Slideshow from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './sass/style.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Slideshow/>
            <Footer/>
        </div>
    );
  }
}

export default App;