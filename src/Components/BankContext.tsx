import React, { createContext, useState, useEffect } from 'react';
import {BankContextProps, BankProviderProps} from "../types/interfaces.ts";


export const BankContext = createContext<BankContextProps>({
    selectedBank: 0,
    toggleBank: () => {},
    volume: 0.5,
    setVolume: () => {},
    handlePowerClick: () =>{},
    powerSwitcher: false,
    displayContent: '',
    setDisplayContent: () => {},
});

export const Provider: React.FC<BankProviderProps> = ({ children }) => {

    const [selectedBank, setSelectedBank] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.5);
    const [powerSwitcher, setPowerSwitcher] = useState(false);
    const [displayContent, setDisplayContent] = useState<string>('');
    const handlePowerClick = () => {
        setPowerSwitcher((powerSwitcher) => !powerSwitcher);
    };

    const setBank = () => {
        setSelectedBank((prevBank) => (prevBank === 0 ? 1 : 0));
    };

    const toggleBank = powerSwitcher ? () => {} : setBank;

    useEffect(() => {
        document.querySelectorAll('audio').forEach((audio: HTMLAudioElement) => {
            audio.volume = selectedBank === 0 ? volume * 0.5 : volume;
        });



    }, [selectedBank, volume]);

    return (
        <BankContext.Provider value={{
            selectedBank,
            toggleBank,
            volume,
            setVolume,
            handlePowerClick,
            powerSwitcher,
            displayContent,
            setDisplayContent}}>
            {children}
        </BankContext.Provider>
    );
};
