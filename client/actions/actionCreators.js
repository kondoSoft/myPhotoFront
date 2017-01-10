//puted in a single file for quick example


//saga integration test
export function fetchPhotos(apiURL){
  return {
    type: 'FETCH_ALL_IMAGES',
    apiURL,
  }
}
// TODO: separate it bi data time

//load photos to state
export function loadPhotos(){
  return {
    type: 'LOAD_PHOTOS'
  }
}

export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
