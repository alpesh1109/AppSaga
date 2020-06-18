import React from 'react';
//import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from './actions/loginAction';
import PropTypes from 'prop-types';

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  logout = () => {
    this.props.logoutAction();
  }
  render() {
    console.log('render');
    // const { ldata } = this.props;
    // alert(JSON.stringify(ldata));
    return (
      <React.Fragment>
        <button class="btn btn-primary" style={{ marginLeft: '10%', marginTop: "10%" }}
          color={this.props.color}
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
          Count : {this.state.count}
        </button>
        <button type="submit" class="btn btn-danger" style={{ marginLeft: '1%', marginTop: "10%" }} onClick={() => this.logout()}>Logout</button>
      </React.Fragment>
    );
  }
}
CounterButton.propTypes = {
  ldata: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  ldata: state.user.logindata
})

export default connect(mapStateToProps, {logoutAction })(CounterButton);