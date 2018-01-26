import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Static Components
import Header from './Layout/Header';
import Footer from './Layout/Footer';
//Dynamic Components
import Home from './Layout/Home';
import ProductContainer from './Products/ProductContainer';
import CustomerContainer from './Customer/CustomerContainer';


const Wrapper = styled.div`
  text-align: center;
`

const Body = styled.div`
  background-color: green;
`

const NavButton = styled.button`
  color: black;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      isNavigating: false
    }
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <nav>
            <Link to='/'><NavButton>Home</NavButton></Link>
            <Link to='/products'><NavButton>Products</NavButton></Link>
            <Link to='/customer'><NavButton>Customer</NavButton></Link>
          </nav>
          <Body>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={ProductContainer}/>
            <Route path='/customer' component={CustomerContainer}/>
          </Body>
          <Footer/>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
