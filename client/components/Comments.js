import React from 'react'

const Comments = React.createClass({

  submitComment(e){
    e.preventDefault()
    const postId = this.props.params.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    if (author.length > 0 && comment.length > 0){
      this.props.addComment(postId, author, comment)
      this.refs.commentForm.reset()
    } else {
      alert('You must enter something...')
    }

  },
  renderComment(comment, i){
    return (
      <div className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">
            &times;
          </button>
        </p>
      </div>
    )
  },
  render(){
    const comments = this.props.comments[this.props.params.postId]
    console.log('comment comments',comments);
    return(
      <div className="comment">
        { comments ? comments.map(this.renderComment) : 'Bee the first' }
        <form onSubmit={this.submitComment} ref='commentForm' className='comment-form'>
          <input type="text" ref='author' placeholder='name'/>
          <input type="text" ref='comment' placeholder='comment'/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
})

export default Comments
