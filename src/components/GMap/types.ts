import { SxProps } from '@mui/material';
import React, { RefObject } from 'react';
import { ButtonVariants } from '../GButton/types';

export type ImageHotspotsProps = {
    className?: string;
    image: string;
    sx?: SxProps;
    hotspots: Array<{
        x: number;
        y: number;
        element: React.ReactElement<'GMapHotspot', any>;
    }>;
};

export type UseResizeProps = {
    imageRef: RefObject<HTMLImageElement>;
    width: number;
};

export type GMapHotspotProps = {
    className?: string;
    variant?: 'button'; // TODO: add 'image'
    buttonVariant?: ButtonVariants;
    caption: string;
    isDisabled?: boolean;
    callback: () => any;
    sx?: SxProps;
};
