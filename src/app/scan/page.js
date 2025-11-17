'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as faceapi from 'face-api.js';
import { FiCameraOff, FiMeh, FiSmile, FiFrown, FiAngry, FiSurprised, FiChevronsRight } from 'react-icons/fi';

const emotionIcons = {
    neutral: <FiMeh className="w-12 h-12" />,
    happy: <FiSmile className="w-12 h-12" />,
    sad: <FiFrown className="w-12 h-12" />,
    angry: <FiAngry className="w-12 h-12" />,
    surprised: <FiSurprised className="w-12 h-12" />,
    disgusted: <FiFrown className="w-12 h-12" />,
    fearful: <FiFrown className="w-12 h-12" />,
}

export default function ScanPage() {
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const router = useRouter();
  const intervalRef = useRef(null);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
        alert("Could not access webcam. Please allow camera access and try again.");
      });
  };

  useEffect(() => {
    const loadModels = async () => {
        setLoading(true);
        try {
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            ]);
            setModelsLoaded(true);
        } catch(e) {
            console.error("Error loading models: ", e);
            alert("Could not load face detection models. Please check your connection and try again.");
        }
        setLoading(false);
    };
    loadModels();
    
    return () => {
      // Cleanup: stop video stream and clear interval when component unmounts
      if(videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
      if(intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      startVideo();
    }
  }, [modelsLoaded]);

  const handleVideoOnPlay = () => {
    intervalRef.current = setInterval(async () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        if (canvasRef.current) {
          canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
          const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
          faceapi.matchDimensions(canvasRef.current, displaySize);

          const detections = await faceapi
            .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

          if (detections && detections.length > 0) {
            const expressions = detections[0].expressions;
            const dominantExpression = Object.keys(expressions).reduce((a, b) =>
              expressions[a] > expressions[b] ? a : b
            );
            setEmotion(dominantExpression);
            
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
          } else {
            setEmotion(null); // No face detected
          }
        }
      }
    }, 300);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-dark text-light">
      <div className="bg-dark/60 backdrop-blur-md rounded-2xl shadow-glow w-full max-w-3xl flex flex-col items-center p-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-6 text-primary">Scan Your Mood</h1>
        <div className="relative w-full aspect-video bg-dark rounded-lg overflow-hidden shadow-inner-glow mb-6">
          <video
            ref={videoRef}
            onPlay={handleVideoOnPlay}
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover transform -scale-x-100"
          />
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full transform -scale-x-100" />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark/80">
              <p className="font-display text-xl animate-pulse">Loading AI Models...</p>
            </div>
          )}
          {!loading && !videoRef.current?.srcObject && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/80">
                <FiCameraOff className="w-16 h-16 text-primary/50 mb-4"/>
                <p className="text-center text-lg">Webcam not started. <br/> Please allow camera access.</p>
            </div>
          )}
        </div>
        
        {emotion ? (
          <div className="text-center animate-fade-in">
             <div className="flex items-center justify-center gap-4 text-secondary mb-4">
                {emotionIcons[emotion] || <FiMeh className="w-12 h-12" />}
                <p className="font-display text-4xl capitalize">{emotion}</p>
             </div>
            <button onClick={() => router.push('/chat')} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:shadow-glow transition-all duration-300 flex items-center gap-2 mx-auto">
              Start Chatting <FiChevronsRight/>
            </button>
          </div>
        ) : (
            <p className="text-lg text-primary/80 h-24 flex items-center justify-center">Scanning for face...</p>
        )}
      </div>
    </main>
  );
}
