import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchShelf() {
  // fetch shelf
  console.log('in saga fetchShelf');

  try {
    // get shelf item
    const response = yield axios.get('/api/shelf');
    console.log('saga GET response', response.data);

    yield put({type: 'SET_SHELF', payload: response.data});
  }
  catch (error) {
    console.error('saga GET ERROR', error);
  }
}

function* fetchUserShelf(action) {
  console.log('in saga fetchUserShelf');

  try {
    // get shelf items
    const response = yield axios.get(`/api/shelf/${action.payload}`);
    console.log('saga GET response', response.data);

    yield put({type: 'SET_SHELF', payload: response.data});
  }
  catch (error) {
    console.error('saga GET ERROR', error);
  }
}

function* addItem(action) {
  //add item here
  try {

  yield axios.post('/api/shelf', action.payload);
  yield put({
    type: 'FETCH_SHELF'
  });
}
  catch (err) {
  console.error('error in ADD_ITEM', err)
}
}

function* removeItem(action) {
  //remove item here
  console.log('in removeItem in shelf.saga, item to delete is', action.payload)
  try {
    const response = axios.delete(`/api/shelf/${action.payload.id}`, action.payload);
    yield put({ type: 'SET_SHELF' });
  } catch {
    console.error('Unauthorized to delete requested item');
    throw('403 Forbidden');
  }

}

function* userSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf); // GET
  yield takeLatest('ADD_ITEM', addItem); //POST
  yield takeLatest('REMOVE_ITEM', removeItem); //POST
  yield takeLatest('FETCH_USER_SHELF', fetchUserShelf); //GET
}

export default userSaga;
