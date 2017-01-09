// posts reducers

const comments  = (state = [], action)=>{
  const postId = action.postId
  const user = action.author
  const text = action.comment
  const comments = state.comments || []

  switch (action.type) {
    case 'ADD_COMMENT':
    if (state[postId] == undefined) {
      state[postId] = []
    }
      state[postId].push({text,user})
      return {...state,}
    case 'REMOVE_COMMENT':
      console.log('removing comment');
      console.log(state[postId]);
      return [
        ...state[postId].slice(0, action.i),
        ...state[postId].slice(action.i +1)
      ]
      default:
      return state

  }
  return state
}

export default comments
