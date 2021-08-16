import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import { verifyTokens } from '../redux/actions/actions'; 

function Layout(props) {
    useEffect(() => {
        props.verifyTokens();
    })
    return (
        <div>
            <Header />
            <div className="App">
                {props.children}
            </div>
        </div>
    )
}

export default connect(null, {verifyTokens})(Layout);
