import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, getLLFomZip } from '../../state/store';
import styled from 'styled-components';
import Product from './Product';
import ProductFilter from './ProductFilter';

import Button from '../Layout/Button';

const ZipSearch = styled.input`
    border-radius: 10px
    border: 2px solid gray;
`
const products = [{
        "id": 1573967503,
        "title": "Harley-Davidson - Envelope Case for Apple iPad, iPad 2 and iPad (3rd Generation) - Black",
        "price": 34.99,
        "original_price": 39.99,
        "url": "http://www.bestbuy.com/site/Harley-Davidson+-+Envelope+Case+for+Apple%AE+iPad%AE%2C+iPad+2+and+iPad+(3rd+Generation)+-+Black/5422949.p?id=1218643212507&skuId=5422949&cmp=RMX&ky=2nOYnsgAdnUUUygixM6IZsxTJF3fsquqM",
        "image": "https://img.goodzer.com/peregimator/?size=medium&valign=center&sign=d4e70e4e&image=http%3A//images.bestbuy.com/BestBuy_US/images/products/5422/5422949_sc.jpg"
    },
    {
        "id": 1573970162,
        "title": "Samsonite - Shuttle Case for Apple iPad, iPad 2 and iPad (3rd Generation) - Black/White",
        "price": 39.99,
        "original_price": null,
        "url": "http://www.bestbuy.com/site/Samsonite+-+Shuttle+Case+for+Apple%AE+iPad%AE%2C+iPad+2+and+iPad+(3rd+Generation)+-+Black/White/5763475.p?id=1218692161151&skuId=5763475&cmp=RMX&ky=2nOYnsgAdnUUUygixM6IZsxTJF3fsquqM",
        "image": "https://img.goodzer.com/peregimator/?size=medium&valign=center&sign=9ac997a0&image=http%3A//images.bestbuy.com/BestBuy_US/images/products/5763/5763475_sc.jpg"
    }
]

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.searchByZip = this.searchByZip.bind(this);
        this.state = {
            zip: ""
        }
    }

    handleZipInput(e) {
        this.setState({
            zip: e.target.value
        })
    }

    searchByZip() {
        this.props.getLLFromZip(this.state.zip);
    }

    render() {
        if (this.props.products != null) {
            //let products = products
            return (
                <div>
                    <h1>Products</h1>
                    <ZipSearch onChange={e => this.handleZipInput(e)}/>
                    <Button onClick={this.searchByZip} >Search</Button>

                    {products.map((i) => {
                        return <Product product={i} key={i.id} />
                    })}
                    <ProductFilter />
                </div>
            )
        } else {
            return(<div>No Products to show</div>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        LatLong: state.LL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: val => dispatch(fetchProducts(val)),
        getLLFromZip: val => dispatch(getLLFomZip(val))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);