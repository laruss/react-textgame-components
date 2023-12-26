import { SxProps } from '@mui/material';

export interface IGVideo {
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string;
}

export interface GVideoProps extends IGVideo {
    src: string;
    sx?: SxProps;
}
