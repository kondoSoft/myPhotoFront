import React from 'react'
import { Link } from 'react-router'

import Photo from './Photo'
import Upload from './Upload'

const PhotoGrid = React.createClass({

  componentDidMount(){
    this.props.fetchPhotos()
    // TODO: sync my localstorafe and initial state !!
  },
  render() {
    return (
      <div className='photo-grid'>
        <Upload {...this.props}></Upload>
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/> )}
      </div>
    )
  }
})

export default PhotoGrid
