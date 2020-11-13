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
import Shop from './Components/Shop';
import MyCart from './Components/MyCart';
import Payment from './Components/Payment';
import PaymentOptions from './Components/PaymentOptions';

import { BrowserRouter as Router, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/MyAccount" component={MyAccount} />
          <Route path="/MyOrders" component={MyOrders} />
          <Route path="/Shop" component={Shop} />
          <Route path="/MyCart" component={MyCart} />
          <Route path="/Payment" component={Payment} />
          <Route path="/PaymentOptions" component={PaymentOptions} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
