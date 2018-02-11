import React from 'react';
import styled from 'styled-components';

const TitleBar = styled.div`
  background-color: ${props => props.theme.topBar.backgrounds.wrapper};
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 10px;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  height: 39px;
  color: #fff;
  font-size: 100%;
  position: relative;
  z-index: 1042
`

const Title = styled.div`
  font-size: 1.5em;
`

const Header = () => (
    <TitleBar>
        <Title>Outdoor Store</Title>
    </TitleBar>
)

export default Header