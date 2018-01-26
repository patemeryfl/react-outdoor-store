import React from 'react';

import Product from './Product';
import ProductFilter from './ProductFilter';

class ProductContainer extends React.Component {
    render() {
        return (
            <div>
                Product Container
                <Product />
                <ProductFilter />
            </div>
        )
    }
}

export default ProductContainer