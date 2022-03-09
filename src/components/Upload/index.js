import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage> Drag your files here...</UploadMessage>
    }

    if(isDragReject){
      return <UploadMessage type="error"> Your file is not supported!</UploadMessage>
    }

    return <UploadMessage type="success"> Drop it!</UploadMessage>
  };

  render(){
    const { onUpload } = this.props
       return (
       <div>
           <Dropzone type="files" accept="text/*" onDropAccepted={onUpload}>
               { ({ getRootProps,getInputProps,isDragActive,isDragReject }) =>(
                  <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                    >
                    <input {...getInputProps()}/>
                    {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
               )}
           </Dropzone>
           </div>
       );
  }

}
