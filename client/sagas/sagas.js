import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

const BASE_URL = 'http://cyberpolin.com:3002/photos/user/586d789259a804652b2edc32'

export function* fetchPhotos(){
  console.log('fetching photos');
  var res = yield fetch(BASE_URL)
            .then(res => res.json())
            .then(res => res.data)
  if(res){
    yield put({type: 'LOAD_PHOTOS', photosAry:res})
  } else {
    yield put({type: 'ALERT', msg:'Something went wrong'})
  }
}

export function* uploadtoS3(action){
  console.log('upload to s3 files', action.filesAry);

}

function* mySaga(){
  yield takeEvery('UPLOAD_PHOTOS', uploadtoS3)
  yield takeEvery('FETCH_ALL_IMAGES', fetchPhotos);

  console.log('this is saga');
}

export default mySaga;
