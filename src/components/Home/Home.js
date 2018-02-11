import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`

`

const Showcase = styled.div`

`

const Featured = styled.div`

`

const ProductServices = styled.div`

`

const TrendingContainer = styled.div`

`

class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <Showcase></Showcase>
                <h2>Featured Categories</h2>
                <h4>top categories <a>shop all</a></h4>
                <Featured></Featured>
                <h2>So many ways to shop & get it all quickly</h2>
                <h4><a>All shipping & services</a></h4>
                <ProductServices></ProductServices>
                <h3>trending this week</h3>
                <TrendingContainer></TrendingContainer>
            </HomeWrapper>
        )
    }
}

export default Home;