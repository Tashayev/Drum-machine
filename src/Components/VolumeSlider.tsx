import React, { useContext } from 'react';
import { BankContext } from './BankContext';
import '../styles/slider.scss'
const VolumeSlider: React.FC = () => {
    const { volume, setVolume, setDisplayContent } = useContext(BankContext);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Logic to update the display content based on the volume change
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        setDisplayContent(`Volume: ${Math.round(newVolume * 100)}`);
    };

    return (
        <div className='slider-container'>
            <input
                className="slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeSlider;