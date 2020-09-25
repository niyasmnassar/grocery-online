import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
