import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MyAccount from './Components/MyAccount';
import MyOrders from './Components/MyOrders';
import MyCart from './Components/MyCart';

import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/MyAccount" component={MyAccount} />
          <Route path="/MyOrders" component={MyOrders} />
          <Route path="/MyCart" component={MyCart} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
