import React from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render() {
    const posts = this.props.posts
    const postId = this.props.params.postId
    const i = posts.findIndex((post) => post.code === postId)
    const post = posts[i]

    return (
      <div className="single-photo">
        <Photo post={post} i={i} {...this.props} />
        <Comments commentss={this.props.comments[postId]} {...this.props}/>
      </div>
    )
  }
})

export default Single
