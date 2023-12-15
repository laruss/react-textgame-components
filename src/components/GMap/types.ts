import React, { RefObject } from 'react';
import { ButtonVariants } from '../GButton/types';

export type ImageHotspotsProps = {
    image: string;
    style?: React.CSSProperties;
    hotspots: Array<{
        x: number;
        y: number;
        element: React.ReactElement<any, any>;
    }>;
};

export type UseResizeProps = {
    imageRef: RefObject<HTMLImageElement>;
    width: number;
};

export type GMapProps = {
    image: string;
    hotspots: Array<{
        x: number;
        y: number;
        element: React.ReactElement<'GMapHotspot', any>;
    }>;
    style?: React.CSSProperties;
};

export type GMapHotspotProps = {
    variant?: 'button'; // TODO: add 'image'
    buttonVariant?: ButtonVariants;
    caption: string;
    callback: () => void;
    style?: React.CSSProperties;
};
