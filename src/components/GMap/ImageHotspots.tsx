import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import useSize from '../../hooks/useSize';
import { useRef } from 'react';
import useResize from './useResize';
import { ImageHotspotsProps } from './types';

const Img = styled('img')`
    width: 100%;
`;

const ImageHotspots = ({ className, image, hotspots, sx }: ImageHotspotsProps) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [sized, { width }] = useSize(() => <div />, { width: 100, height: 100 });
    const { dimensions, handleResize } = useResize({ imageRef, width });

    return (
        <Box
            className={`g-map-container ${className || ''}`}
            sx={{ position: 'relative' }}
        >
            {sized}
            <Img
                className={'g-map-image'}
                ref={imageRef}
                src={image}
                onLoad={handleResize}
                alt={image}
                sx={sx}
            />
            {
                hotspots.map(({ x, y, element }) => (
                    <Box
                        className={'g-map-hotspot-container'}
                        key={`${x}-${y}`}
                        sx={{
                            position: 'absolute',
                            left: `${(x / 100) * dimensions.width}px`,
                            top: `${(y / 100) * dimensions.height}px`,
                        }}
                    >
                        {element}
                    </Box>
                ))
            }
        </Box>
    );
};

export default ImageHotspots;
