import React from 'react';
import App from './App';
import Login from './login/login';
import CounterButton from './counterpurecom';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends React.Component {

  render() {
    const { auth } = this.props;
    //alert(auth);

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => { if (auth) { return (<Redirect to="/CounterButton" />) } else { return (<Login />) } }} />
          <Route exact path="/App" render={() => { if (auth) { return (<App />) } else { return (<Redirect to="/" />) } }} />
          <Route exact path="/CounterButton" render={() => { if (auth) { return (<CounterButton />) } else { return (<Redirect to="/" />) } }} />
        </Switch>
      </React.Fragment>
    )
  }
}
Main.propTypes = {
  auth: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  auth: state.user.auth
})
export default connect(mapStateToProps)(Main);
//export default Main;