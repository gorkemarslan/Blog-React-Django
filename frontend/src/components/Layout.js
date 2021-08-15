import React from 'react'
import '../App.css';
import Header from './Header';

function Layout(props) {
    return (
        <div>
            <Header />
            <div className="App">
                {props.children}
            </div>
        </div>
    )
}

export default Layout
