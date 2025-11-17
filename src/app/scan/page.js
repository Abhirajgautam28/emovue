'use client';

import { useState, useRef, useEffect } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import FloatingButton from '@/components/ui/FloatingButton';
import { useRouter } from 'next/navigation';
import * as faceapi from 'face-api.js';

export default function ScanPage() {
  const [emotion, setEmotion] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      ]);
      startVideo();
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error(err));
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
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
        }

        const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
        faceapi.matchDimensions(canvasRef.current, displaySize);
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);

      }
    }, 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <GlassCard className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Scan Your Mood</h1>
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            onPlay={handleVideoOnPlay}
            width="100%"
            height="100%"
            autoPlay
            muted
            className="w-full h-full"
          />
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
        </div>
        {emotion && (
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold">You seem to be {emotion}</p>
            <FloatingButton onClick={() => router.push('/chat')} className="mt-4">
              Chat with AI Companion
            </FloatingButton>
          </div>
        )}
      </GlassCard>
    </main>
  );
}
