import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_ARTIST, FETCH_ARTIST,DELET_ARTIST,UPDATE_ARTIST,postArtistError, fetchusersSuccess, fetchUsersError,deletArtistError,updateArtistSuccess,updateArtistError } from '../action/Action';
import { deletArtist,postArtist,fetchArtists,updateArtist  } from '../../utils/api'; // Import our API function

function* fetchArtistsSaga() {
  try {
    const artists = yield call(fetchArtists);
    yield put(fetchusersSuccess(artists));
  } catch (error) {
    yield put(fetchUsersError(error.message));
  }
}

function* postArtistSaga(action) {
  try {
    const artist = yield call(postArtist, action.payload);
    yield put(postArtistSuccess(artist));
  } catch (error) {
    yield put(postArtistError(error.message));
  }
}
export function* deleteArtistSaga(action){
    console.log('Saga received ID:', action.payload, typeof action.payload);

    try{
    yield call(deletArtist, action.payload);
    yield put(deletArtistSuccess(action.payload)); 
    yield call(fetchArtistsSaga);
  } catch (error) {
    yield put(deletArtistError(error.message));
  }
    }

function* updateArtistSaga(action) {
  try {
    const { id, ...artistData } = action.payload;
    const updatedArtist = yield call(updateArtist, id, artistData);
    yield put(updateArtistSuccess(updatedArtist));
    yield call(fetchArtistsSaga);
  } catch (error) {
    yield put(updateArtistError(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_ARTIST, fetchArtistsSaga);
  yield takeLatest(POST_ARTIST, postArtistSaga);
  yield takeLatest(DELET_ARTIST,deleteArtistSaga);
  yield takeLatest(UPDATE_ARTIST, updateArtistSaga);


}

