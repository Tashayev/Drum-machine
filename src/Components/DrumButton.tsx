import React, { useContext } from 'react';
import { DrumButtonProps } from '../types/interfaces';
import { BankContext } from './BankContext';

const DrumButton: React.FC<DrumButtonProps> = ({ drumMapping, sound }) => {

    const { selectedBank, volume, powerSwitcher, setDisplayContent } = useContext(BankContext);

    const handleButtonClick = () => {
        const audio = new Audio(sound.audio);
        audio.volume = selectedBank === 0 ? volume * 0.5 : volume;
        audio.play().catch(error => console.error('Error playing audio:', error));
        setDisplayContent(sound.name);
    };

    const handleClick = powerSwitcher ? () => {} : handleButtonClick;

    return (
        <div>
            <button onClick={handleClick}>{drumMapping.id}</button>
        </div>
    );
};

export default DrumButton;
