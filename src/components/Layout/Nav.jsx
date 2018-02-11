import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductSearch from './Search';
import fetchProducts from '../../state/store';

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: top;
    flex-wrap: nowrap;
    min-width: 41px;
    margin: 0 10px;
    background: #fff;
    padding: 0 10px;
    height: 59px;
    border-bottom: 1px solid #d6d6d6;
    z-index: 1;
`

const Navbutton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2em;
  padding: 1em .6em 1em .6em;
  cursor: pointer;
  display: inline-block;
`

const Navigation = () => {
    function onSearch(query) {
        console.log(query);
    }
    return(
        <Navbar>
            <Link to='/'><Navbutton></Navbutton></Link>
            <Link to='/products'><Navbutton>categories</Navbutton></Link>
            <Link to='/customer'><Navbutton>deals</Navbutton></Link>
            <ProductSearch onSearch={onSearch}/>
            <Link to='/customer'><Navbutton>my account</Navbutton></Link>
            <Link to='/customer'><Navbutton>0 items</Navbutton></Link>
        </Navbar>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        productSearch: val => dispatch(fetchProducts(val))
    };
}

export default connect(mapDispatchToProps)(Navigation);