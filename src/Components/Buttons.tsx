import "../styles/buttons.scss"
import React, { useContext } from 'react';
import DrumButton from './DrumButton';
import { BankContext } from './BankContext';
import { DrumConfig } from '../types/interfaces';
import drumConfig from '../assets/songData.json';

const Buttons: React.FC = () => {
  const typedDrumConfig: DrumConfig = drumConfig;
  const { selectedBank } = useContext(BankContext);

  return (
    <div className='drum-pad'>
      {typedDrumConfig.songs.map((drumMapping, i) => (
        <div key={i}>
          {selectedBank === 0
            ? drumMapping.bank1.map((sound, j, ) => (
                <DrumButton key={j} drumMapping={drumMapping} sound={sound} name={sound.name} />
              ))
            : drumMapping.bank2.map((sound, j) => (
                <DrumButton key={j} drumMapping={drumMapping} sound={sound} name={sound.name} />
              ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;