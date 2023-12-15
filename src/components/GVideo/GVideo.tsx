import React, { useMemo } from 'react';
import VideoContainer from './VideoContainer';
import { GVideoProps } from './types';

const GVideo = ({
    src,
    autoPlay = true,
    loop = true,
    muted = true,
    width = '100%',
    controls = false,
    style = {},
}: GVideoProps) => {
    const type = useMemo(() => `video/${src.slice(src.lastIndexOf('.') + 1)}`, [src]);

    return (
        <VideoContainer style={style}>
            <video width={width} autoPlay={autoPlay} loop={loop} controls={controls} muted={muted}>
                <source src={src} type={type} />
            </video>
        </VideoContainer>
    );
};

export default GVideo;
