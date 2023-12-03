import React, {Dispatch, ReactNode, SetStateAction} from "react";

export interface DrumSound {
    name: string;
    audio: string;
}

export interface DrumMapping {
    id: string;
    bank1: DrumSound[];
    bank2: DrumSound[];
}

export interface DrumConfig {
    songs: DrumMapping[];
}

export interface DrumButtonProps {
    drumMapping: DrumMapping;
    sound: DrumSound;
    key: number;
    name: string;
}
export interface BankProviderProps {
    children: ReactNode;
}

export interface BankContextProps {
    selectedBank: number;
    toggleBank: () => void;
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
    handlePowerClick:  React.MouseEventHandler<HTMLDivElement>;
    powerSwitcher: boolean;
    displayContent: string;
    setDisplayContent: (content: string) => void;
}
export interface AudioPlayerProps {
    audioUrl: string;
}
export interface DisplayProps {
    content: string;
}