import React, { useState, useEffect, useContext } from 'react';
import VolumeSlider from './VolumeSlider';
import { BankContext } from './BankContext';
import {AudioPlayerProps} from "../types/interfaces.ts";


const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [, setAudio] = useState<HTMLAudioElement | null>(null);
  const { volume } = useContext(BankContext);

  useEffect(() => {
    const audioElement = new Audio(audioUrl);
    audioElement.volume = volume;

    setAudio(audioElement);

    return () => {
      // Cleanup when component unmounts
      if (audioElement) {
        audioElement.pause();
        setAudio(null);
      }
    };
  }, [audioUrl, volume]);

  return (
      <div>
        <VolumeSlider />
      </div>
  );
};
export default AudioPlayer;