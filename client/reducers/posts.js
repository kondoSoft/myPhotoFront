// posts reducers
// import fetch from 'isomorphic-fetch' ASYNC FETCH
const posts  = (state = [], action)=>{
  var newState
  const index = action.index
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return[
        ...state.slice(0,index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index +1)
      ]
      break;
    case 'LOAD_PHOTOS':
      return action.photosAry
    case 'UPLOAD_PHOTOS':
      console.log(action);
      return state

    default:
      return state

  }
  return state
}

export default posts
