import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: ${props => props.theme.bottomBar.backgrounds.wrapper};
    height: ${props => props.theme.bottomBar.sizes.height}px;
    border-top: 2px; border-bottom: 2px;
    border-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-bottom: 0px;
`

const A = styled.button`
    cursor: pointer;
    font-size: 1em;
    border: none;
    background-color: transparent;
`

const Footer = () => {
    return <FooterContainer>
             <A>help</A>
             <A>stores</A>
             <A>apps</A>
             <A>social</A>
             <A>more</A>
           </FooterContainer>
}

export default Footer;