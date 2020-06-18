import React from 'react';
import { connect } from 'react-redux'
import img from '../loading_spinner.gif'

let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h3>LOADING</h3>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.newsread.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;


