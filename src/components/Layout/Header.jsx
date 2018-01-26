import React from 'react';
import styled from 'styled-components';

const TitleBar = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
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