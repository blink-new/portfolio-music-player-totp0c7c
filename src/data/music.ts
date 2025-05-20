export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  audioUrl: string;
  duration: number; // in seconds
}

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Synthwave Nights',
    artist: 'ElectroDream',
    album: 'Neon Horizon',
    albumCover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_f02c336e81.mp3?filename=electronic-future-beats-117997.mp3',
    duration: 152,
  },
  {
    id: '2',
    title: 'Cosmic Journey',
    artist: 'Astral Vibes',
    album: 'Interstellar',
    albumCover: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe5e170.mp3?filename=cinematic-atmosphere-score-2-22136.mp3',
    duration: 141,
  },
  {
    id: '3',
    title: 'Midnight Chill',
    artist: 'Luna Dreams',
    album: 'Moonlit Sessions',
    albumCover: 'https://images.unsplash.com/photo-1649867440747-ccd966de08c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2023/06/19/audio_8ce70d0be0.mp3?filename=lofi-chill-medium-version-159456.mp3',
    duration: 120,
  },
  {
    id: '4',
    title: 'Urban Echoes',
    artist: 'City Pulse',
    album: 'Metropolitan',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_0cbb40e01e.mp3?filename=lofi-study-112191.mp3',
    duration: 165,
  },
  {
    id: '5',
    title: 'Morning Sunrise',
    artist: 'Dawn Harmonies',
    album: 'First Light',
    albumCover: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/17/audio_61bd5b064e.mp3?filename=forest-lullaby-110624.mp3',
    duration: 114,
  }
];