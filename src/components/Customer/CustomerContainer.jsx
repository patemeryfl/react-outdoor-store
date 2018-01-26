import React from 'react'

import Cart from './Cart'
import Profile from './Profile'

class CustomerContainer extends React.Component {
    render() {
        return (
            <div>
                <Cart/>
                <Profile/>
            </div>
        )
    }
}

export default CustomerContainer