import { SxProps } from '@mui/material';
import { ReactElement, RefObject } from 'react';
import { ButtonVariants } from '../GButton/types';

export type UseResizeProps = {
    imageRef: RefObject<HTMLImageElement>;
    width: number;
};

export type GMapHotspotType = ReactElement<'GMapHotspot', any>;

type BaseHotspotProps = {
    className?: string;
    isDisabled?: boolean;
    callback: () => any;
    sx?: SxProps;
};

type ButtonProps = {
    buttonVariant?: ButtonVariants;
    caption: string;
} & BaseHotspotProps;

type ImageProps = {
    idle: string;
    hover?: string;
    active?: string;
    disabled?: string;
    alt?: string;
} & BaseHotspotProps;

export type HotspotType = 'button' | 'image';

export type GMapHotspotProps<T extends HotspotType> = T extends 'button'
    ? { variant: T } & ButtonProps
    : { variant: T } & ImageProps;

export type GMapProps = {
    className?: string;
    image: string;
    sx?: SxProps;
    scaleHotspots?: boolean;
    hotspots: Array<{
        x: number;
        y: number;
        element: GMapHotspotType;
    }>;
};
