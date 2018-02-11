import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Static Components
import Header from './Layout/Header';
import Navigation from './Layout/Nav';
import Footer from './Layout/Footer';
//Dynamic Components
import Home from './Home/Home';
import ProductContainer from './Products/ProductContainer';
import CustomerContainer from './Customer/CustomerContainer';

import theme from "../style/theme";
import styles from "../style/base";

const Container = styled.div`
  ${styles.baseStyles};
  height: 100vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      isNavigating: false
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router> 
          <Container>
            <Header />
              <Navigation />
              <Route exact path='/' component={Home}/>
              <Route path='/products' component={ProductContainer}/>
              <Route path='/customer' component={CustomerContainer}/>
            <Footer/>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
