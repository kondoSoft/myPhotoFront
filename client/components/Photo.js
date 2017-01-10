import React from 'react'
import {Link} from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Photo = React.createClass({
  render(){
    const post = this.props.post
    const comments = this.props.comments
    const index = this.props.i
    return(
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post._id}`}>
            <img className='grid-photo' src={post.url} alt={post.title} />
          </Link>

          <CSSTransitionGroup
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>
            {post.likes}</span>
          </CSSTransitionGroup>

          <figcaption>
            <p>{post.title}</p>
            <div className='control-buttons'>
              <button onClick={this.props.increment.bind(null, index)}
               className="likes">&hearts; {post.likes}</button>
              <Link className='button' to={`/view/${post.code}`}>
                <span className='comment-count'>
                  <span className='speech-bubble'></span>
                  {comments[post.code] ? comments[post.code].length : 0 }
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    )
  }
})

export default Photo
