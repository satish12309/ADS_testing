"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Styles from "./VideoYt.module.css";
import {
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
  FaRedo,
} from "react-icons/fa";

const VideoYt = () => {
  const videoRef = useRef(null);
  const soundRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);


  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      // soundRef.current.src = audioUrl;
      soundRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
      setShowThumbnail(false);
    } else {
      videoRef.current.pause();
      // soundRef.current.src = audioUrl;
      soundRef.current.play();
      setIsPlaying(false);
      setShowThumbnail(true);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progress = (current / duration) * 100;
    setProgress(progress);
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  }, []);

  const handleTrackbarChange = useCallback((event) => {
    const newTime = (videoRef.current.duration / 100) * event.target.value;
    videoRef.current.currentTime = newTime;
    setProgress(event.target.value);
  }, []);

  const handleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    // soundRef.current.src = audioUrl;
    soundRef.current.play();
    setIsMuted(videoRef.current.muted);
  }, []);

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
      setProgress(0);
      setShowThumbnail(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
              setShowThumbnail(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    const handleEnded = () => {
      setIsEnded(true);
      setIsPlaying(false);
      setShowThumbnail(true);
    };

    videoRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
        videoRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <div className={Styles.videomain}>
      <button className={Styles.muteButton} onClick={handleMute}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <div className={Styles.videoContainer}>
        {showThumbnail && (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/course_yop.webp"
            alt="Learnbay"
            quality={100}
            priority
            width={550}
            height={250}
            className={Styles.thumbnail}
            onClick={handlePlayPause}
          />
        )}
        {/* Video */}
        <video
          ref={videoRef}
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/videoplayback_1.mp4"
          width="390"
          height="500"
          className={Styles.video}
          onTimeUpdate={handleTimeUpdate}
          style={{ display: showThumbnail ? "none" : "block" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={Styles.controlsContainer}>
        <div className={Styles.trackbarDiv}>
          <input
            type="range"
            className={Styles.trackbar}
            value={progress}
            onChange={handleTrackbarChange}
          />
        </div>
        {!isEnded ? (
          <button className={Styles.playPauseButton} onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        ) : (
          <button className={Styles.playPauseButton} onClick={handleRestart}>
            <FaRedo />
          </button>
        )}
      </div>
      <audio ref={soundRef} />
    </div>
  );
};

export default VideoYt;
