import { SxProps } from '@mui/material';

export interface IGVideo {
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string;
}

export interface GVideoProps extends IGVideo {
    className?: string;
    src: string;
    sx?: SxProps;
}
