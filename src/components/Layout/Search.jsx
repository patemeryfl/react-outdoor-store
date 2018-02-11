import React from 'react';
import styled from 'styled-components';

const Navbarsearchcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 80%;
    min-width: 41px;
    margin: 0;
`

const Navbarsearch = styled.input`
    border-radius: 20px;
    border 1px solid grey;
    width: 60%;
    height: 2.5em;
    padding-left: 20px;
`
const SearchButton = styled.button`
    padding: .6em 0 0 1em;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

class ProductSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleSearch(e) {
        this.setState({
            search: e.target.value
        })
    }
    
    onSearch() {
        this.props.onSearch(this.state.search);
    }

    render() {
        return(
            <Navbarsearchcontainer>
                <Navbarsearch value={this.state.search} onChange={e => this.handleSearch(e)}/>
                <SearchButton onClick={this.onSearch()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
                </SearchButton>
            </Navbarsearchcontainer>
        )
    }
}

export default ProductSearch;