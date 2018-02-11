import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 1em;
    padding: 10px;
`

const styles = {
    img: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        border: 0
    },

    price: {
        fontSize: "15px"
    },
    title: {
        fontSize: "20px",
        color: "black"
    }
}


const Product = ({product}) => {
    const { title, price, url, image } = product;
    return (
        <Wrapper>
            <img src={image} alt={title} style={styles.img}/>
            <button style={styles.button} className="btn btn-primary btn-sm" >Choose Options</button>
            <h2 style={styles.price}><b>${price}</b></h2>
            <p className="title"><a href={url}>{title}</a></p>
        </Wrapper>
    )
}

export default Product;