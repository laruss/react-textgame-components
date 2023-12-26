import { useGContext } from '../GContext';
import { useMemo } from 'react';
import VideoContainer from './VideoContainer';
import { GVideoProps } from './types';

const GVideo = (props: GVideoProps) => {
    const { video } = useGContext();

    const {
        src,
        autoPlay = video?.autoPlay as boolean,
        loop = video?.loop as boolean,
        muted = video?.muted as boolean,
        width = '100%',
        controls = video?.controls as boolean,
        sx,
    } = props;
    const type = useMemo(() => `video/${src.slice(src.lastIndexOf('.') + 1)}`, [src]);

    return (
        <VideoContainer sx={sx}>
            <video width={width} autoPlay={autoPlay} loop={loop} controls={controls} muted={muted}>
                <source src={src} type={type} />
            </video>
        </VideoContainer>
    );
};

export default GVideo;
