import React from 'react';
import { connect } from 'react-redux'
import img from '../loading_giphy.gif'


let Loading = () => (

    <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <img src={img} alt='loading' />
    </div>
);


export default Loading;


