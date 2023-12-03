import React, { useContext } from 'react';
import '../styles/switcher.scss';
// import {DisplayProps} from "../types/interfaces.ts";
import { BankContext } from './BankContext';
import AudioPlayer from './AudioPlayer';

const Panel: React.FC = () => {

    const { selectedBank,
        toggleBank,
        handlePowerClick,
        powerSwitcher,
        displayContent
    } = useContext(BankContext);

    return (
        <div className='panel'>
            <div className='switch-container'>
                <div className={`switch ${powerSwitcher ? '' : 'active'} `} onClick={handlePowerClick}></div>
            </div>
            <div className="display">
                <p>{displayContent}</p>
            </div>
            <AudioPlayer audioUrl={''} />
            <div className='switch-container'>
                <div className={`switch ${selectedBank ? '' : 'active'} bank-selector`} onClick={toggleBank}></div>
            </div>
        </div>
    );
};

export default Panel;
