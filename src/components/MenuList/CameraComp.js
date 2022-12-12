import React from 'react'
import Webcam from "react-webcam";


const CameraComp = (props) => {
    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
     
      return (
        <Camera
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        />
      );
    }



export default CameraComp

