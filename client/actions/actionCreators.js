//puted in a single file for quick example


//saga integration test
export function fetchPhotos(action){
  console.log('fetchin');
  return {
    type: 'FETCH_ALL_IMAGES',
    action
  }
}
// TODO: separate it bi data time

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
