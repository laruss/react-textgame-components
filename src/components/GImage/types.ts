import React from 'react';

export interface GameImageProps {
    src: string | undefined;
    style?: React.CSSProperties;
    imageRadius?: string;
    className?: string;
    imageStyles?: React.CSSProperties;
}
