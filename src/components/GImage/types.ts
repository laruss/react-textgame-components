import { SxProps } from '@mui/material';
import React from 'react';

export interface GameImageProps {
    src?: string;
    sx?: SxProps;
    imageRadius?: string;
    className?: string;
    imageClassName?: string;
    imageStyles?: React.CSSProperties;
}
