import React, { Suspense, lazy } from 'react';
import App from './App';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './containers/lodingdemo';
const Login = lazy(() => import('./login/login'));
const CounterButton = lazy(() => import('./counterpurecom'));


class Main extends React.Component {

  render() {
    const { auth } = this.props;
    //alert(auth);

    return (
      <React.Fragment>
        <Suspense fallback={<Loading />}>
          <Switch>
            {/* <Route exact path="/" component={child} /> */}
            <Route exact path="/" render={() => { if (auth) { return (<Redirect to="/CounterButton" />) } else { return (<Login />) } }} />
            <Route exact path="/App" render={() => { if (auth) { return (<App />) } else { return (<Redirect to="/" />) } }} />
            <Route exact path="/CounterButton" render={() => { if (auth) { return (<CounterButton />) } else { return (<Redirect to="/" />) } }} />
          </Switch>
        </Suspense>
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