import React from 'react'
import Dropzone from 'react-dropzone'

const Upload = React.createClass({
  getInitialState(){
    return{
      files:[]
    }
  },
  onDrop(acceptedFiles, rejectedFiles){
    console.log('accepted files ', acceptedFiles);
    console.log('rejected files ', rejectedFiles);
    this.setState({
      files:acceptedFiles
    })
    this.props.uploadPhotos(acceptedFiles)

  },
  render(){
    return(
      <div>
        <Dropzone onDrop={this.onDrop} accept='image/*'>
          <div>Add some photos here...</div>
        </Dropzone>
        {this.state.files.length > 0 ? <div>
        <h2>Uploading {this.state.files.length} files...</h2>
        <div>{this.state.files.map((file, i) => <img key={i} src={file.preview} /> )}</div>
        </div> : null}
      </div>
    )
  }
})

export default Upload
