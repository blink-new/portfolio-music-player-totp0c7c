import { useMusicPlayer } from '../hooks/use-music-player';
import { tracks } from '../data/music';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Slider } from './ui/slider';

export function MusicPlayer() {
  const {
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
  } = useMusicPlayer(tracks);
  
  const [vinylRotation, setVinylRotation] = useState(0);
  
  useEffect(() => {
    let animationId: number;
    
    const rotateVinyl = () => {
      if (isPlaying) {
        setVinylRotation(prev => (prev + 0.4) % 360);
      }
      animationId = requestAnimationFrame(rotateVinyl);
    };
    
    rotateVinyl();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };
  
  return (
    <div className="max-w-md w-full backdrop-blur-lg bg-black/30 rounded-xl p-6 shadow-2xl border border-white/10">
      {/* Vinyl Record */}
      <div className="relative flex justify-center mb-8">
        <div className="w-56 h-56 relative">
          {/* Vinyl background */}
          <div className="absolute inset-0 rounded-full bg-black shadow-lg"></div>
          
          {/* Vinyl grooves */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-60"
               style={{ 
                 backgroundImage: 'repeating-radial-gradient(circle at center, rgba(255,255,255,0.1) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)',
                 transform: `rotate(${vinylRotation}deg)`,
                 transition: 'transform 0.5s linear' 
               }}>
          </div>
          
          {/* Vinyl center hole */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-200">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-900"></div>
          </div>
          
          {/* Album Cover */}
          <div 
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cover bg-center shadow-lg",
              "transition-transform duration-500",
              isPlaying ? "scale-100" : "scale-95"
            )}
            style={{ 
              backgroundImage: `url(${currentTrack.albumCover})`,
              transform: `rotate(${vinylRotation}deg)` 
            }}
          ></div>
        </div>
      </div>
      
      {/* Track Info */}
      <div className="text-center mb-5">
        <h3 className="text-xl font-bold text-white mb-1 truncate">{currentTrack.title}</h3>
        <p className="text-sm text-zinc-300 mb-1">{currentTrack.artist}</p>
        <p className="text-xs text-zinc-400">{currentTrack.album}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4">
        <Slider
          value={[progress]}
          max={duration || 100}
          step={0.1}
          onValueChange={([value]) => seekTo(value)}
          className="my-2"
        />
        <div className="flex justify-between text-xs text-zinc-400">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-center space-x-6">
        <button 
          onClick={playPreviousTrack}
          className="text-white hover:text-primary-300 transition"
        >
          <SkipBack size={28} />
        </button>
        
        <button 
          onClick={togglePlayPause}
          className="bg-white p-4 rounded-full text-black hover:bg-primary-100 transition transform active:scale-95"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        
        <button 
          onClick={playNextTrack}
          className="text-white hover:text-primary-300 transition"
        >
          <SkipForward size={28} />
        </button>
      </div>
      
      {/* Volume Control */}
      <div className="flex items-center mt-6 space-x-3">
        <button 
          onClick={() => setVolumeLevel(volume === 0 ? 0.7 : 0)}
          className="text-zinc-300 hover:text-white transition"
        >
          {getVolumeIcon()}
        </button>
        
        <Slider
          value={[volume * 100]}
          max={100}
          step={1}
          onValueChange={([value]) => setVolumeLevel(value / 100)}
          className="w-full"
        />
      </div>
    </div>
  );
}