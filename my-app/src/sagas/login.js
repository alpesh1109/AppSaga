import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_SUCC, USER_LOGOUT } from '../actions/types';


function loginApi(email, password) {
    // call to the "fetch".  this is a "native" function for browsers
    // that's conveniently polyfilled in create-react-app if not available

    const userdata = [{ 'email': email, 'password': password }];
    return userdata;
    //   return fetch(signupUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   })
    //     .then(handleApiErrors) // we'll make this in a second
    //     .then(response => response.json())
    //     .then(json => json)
    //     .catch((error) => { throw error })
}

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* loginFlow(action) {
    try {
        const { email, password, callback } = action
        // pulls "calls" to our signupApi with our email and password
        // from our dispatched signup action, and will PAUSE
        // here until the API async function, is complete!
        const response = yield call(loginApi, email, password)
        // when the above api call has completed it will "put",
        // or dispatch, an action of type SIGNUP_SUCCESS with
        // the successful response.
        yield put({ type: LOGIN_SUCC, json: response, auth: true });
        localStorage.setItem('auth', true);
        if (!!callback) {
            callback('Hello');
        }
    } catch (error) {
        // if the api call fails, it will "put" the SIGNUP_ERROR
        alert(error);
        // into the dispatch along with the error.
        //yield put({ type: SIGNUP_ERROR, error })
    }
}
function* logoutFlow() {
    try {

        yield put({ type: LOGIN_SUCC, auth: false })
        localStorage.clear();
       // window.location.href = "/";
    } catch (error) {
        // if the api call fails, it will "put" the SIGNUP_ERROR
        alert(error);
        // into the dispatch along with the error.
    }
}
// Watches for the SIGNUP_REQUESTING action type
// When it gets it, it will call signupFlow()
// WITH the action we dispatched
export default function* loginWatcher() {
    // takeLatest() takes the LATEST call of that action and runs it
    // if we we're to use takeEvery, it would take every single
    // one of the actions and kick off a new task to handle it
    // CONCURRENTLY!!!
    yield takeLatest(LOGIN_USER, loginFlow)
    yield takeLatest(USER_LOGOUT, logoutFlow)
}

