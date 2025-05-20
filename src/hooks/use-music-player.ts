import { useState, useRef, useEffect } from 'react';
import { Track } from '../data/music';

export const useMusicPlayer = (tracks: Track[]) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.audioUrl);
    } else {
      audioRef.current.src = currentTrack.audioUrl;
    }
    
    audioRef.current.volume = volume;
    
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime);
      }
    };
    
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };
    
    const handleEnded = () => {
      playNextTrack();
    };
    
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('ended', handleEnded);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentTrackIndex]);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
          .catch(error => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };
  
  const playPreviousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };
  
  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };
  
  const setVolumeLevel = (level: number) => {
    setVolume(Math.min(1, Math.max(0, level)));
  };
  
  return {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    seekTo,
    setVolumeLevel
  };
};