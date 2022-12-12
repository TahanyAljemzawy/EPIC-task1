import React from "react";

import "./faceDet.css";
import MainMenu from "./components/MenuList/mainMenu";
import Header from "./components/MenuList/header";

import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import image from "../src/images/Mask/Mask3.jpg";

import * as blazeface from "@tensorflow-models/blazeface";

function App() {
  const [isTfReady, setisTfReady] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(350);
  const [videoHeight, setVideoHeight] = useState(550);
  const videoConstraints = {
    height: 550,
    width: 550,
    facingMode: "user",
  };

  
  var canvas = document.getElementById("canvas");
 // var context = canvas.getContext("2d");
//  var video = document.getElementById('videoElement');
 // video.addEventListener('play',function(){context.draw(this, context,640,480);},false);


  // Number of classes to classify
  const NUM_CLASSES = 2;
  // Labels for our classes
  const classes = ["Mask", "NoMask"];
  // Webcam Image size. Must be 227.
  const IMAGE_SIZE = 227;
  // K value for KNN
  const TOPK = 10;

  const videoRef = useRef(null);
  const loadModel = async () => {
    setIsModelLoading(true);

    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      setIsModelLoading(false);
      console.log(error);
    }
  };
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };
  //const loadImage = (src)=> {  return new Promise((resolve, reject) => {    const img = new Image();    img.src = src;    img.onload = () => resolve();    img.onerror = (err) => reject(err);  });}

  const identify = async () => {
    /*try {
          const result = loadImage(image);
          console.log(result);

    } catch (error) {
      console.log(error);
    }*/
  };

  useEffect(() => {
    //  isReady()
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    findFaces();

    console.log("takePhoto", dataUri);
    // setImage(dataUri)
  };

  const findFaces = async () => {
    try {
      const model = await blazeface.load();
      const img = document.querySelector("img");
      const predictions = await model.estimateFaces(img, false);
     // context.drawImage(img, 0, 0, videoWidth, videoHeight);

      console.log(predictions);

      if (predictions.length > 0) {
        console.log(predictions);
      } else {
        console.log("no face");
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  const onUserMediaStart = () => {
    findFaces();
  };

  return (
    <div className='app'>
      <button onClick={identify}>identify</button>
      <button
        variant={"contained"}
        style={{
          color: "white",
          backgroundColor: "blueviolet",
          width: "50%",
          maxWidth: "250px",
        }}
        onClick={() => {
          console.log("hi");
          //predictionFunction();
        }}
      >
        Start Detect
      </button>
    
      <div>
        <Webcam
          audio={false}
          id='img'
          ref={webcamRef}
          screenshotQuality={1}
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints}
          onUserMedia={onUserMediaStart}
        />
      </div>
      <div id='canvas'>
        <canvas
          id='myCanvas'
          width={videoWidth}
          height={videoHeight}
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      <div className='ft'>
        <h1>Made with ♥ </h1>
      </div>
    </div>
  );
}

export default App;
