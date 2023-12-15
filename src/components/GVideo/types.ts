import React from 'react';

export type GVideoProps = {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string;
    style?: React.CSSProperties;
};
