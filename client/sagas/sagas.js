import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {loadPhotos} from '../reducers/index'
const BASE_URL = 'http://cyberpolin.com:3002/photos/user/586d789259a804652b2edc32'

export function* fetchPhotos(){
  console.log('fetching photos');
  var res = yield fetch(BASE_URL)
            .then(res => res.json())
            .then(res => res.data)
            console.log(res);
  if(res){
    yield put({type: 'LOAD_PHOTOS', photosAry:res})
  } else {
    yield put({type: 'ALERT', msg:'Something went wrong'})
  }

  // console.log('fetchoidas;lfkasd;lfj');
}

function* mySaga(){
  yield takeEvery('FETCH_ALL_IMAGES', fetchPhotos);

  console.log('this is saga');
}

export default mySaga;
