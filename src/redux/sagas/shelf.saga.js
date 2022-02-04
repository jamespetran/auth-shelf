import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchShelf() {
  // fetch shelf
  
  // try {
  //   const config = {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   };

  //   // the config includes credentials which
  //   // allow the server session to recognize the user
  //   // If a user is logged in, this will return their information
  //   // from the server session (req.user)
  //   const response = yield axios.get('/api/user', config);

  //   // now that the session has given us a user object
  //   // with an id and username set the client-side user object to let
  //   // the client-side code know the user is logged in
  //   yield put({ type: 'SET_USER', payload: response.data });
  // } catch (error) {
  //   console.log('User get request failed', error);
  // }
  console.log('in saga fetchShelf');

  try {
    // get shelf item
    const response = yield axios.get('/api/shelf');


  }
  catch (error) {
    console.error('saga GET ERROR', error);
  }
}

function* addItem() {
  //add item here
}

function* removeItem() {
  //remove item here
}

function* userSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf); // GET
  yield takeLatest('ADD_ITEM', addItem); //POST
  yield takeLatest('REMOVE_ITEM', removeItem); //POST
}

export default userSaga;
