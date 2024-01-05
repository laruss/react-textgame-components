import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGContext } from 'components/GContext';
import useSize from '../../hooks/useSize';
import { useCallback, useRef } from 'react';
import useResize from './useResize';
import { ImageHotspotsProps } from './types';

const Img = styled('img')`
    width: 100%;
`;

const ImageHotspots = ({ className, image, hotspots, sx }: ImageHotspotsProps) => {
    const { map } = useGContext();
    const imageRef = useRef<HTMLImageElement>(null);
    const [sized, { width }] = useSize(() => <div />, { width: 100, height: 100 });
    const { dimensions, handleResize } = useResize({ imageRef, width });

    const logCursorPosition = useCallback(
        (e: React.MouseEvent<HTMLImageElement>) => {
            if (!imageRef.current || !map?.logCoordinatesOnCLick) return;
            const x = (e.nativeEvent.offsetX / imageRef.current.width) * 100;
            const y = (e.nativeEvent.offsetY / imageRef.current.height) * 100;
            console.log(x, y);
        },
        [imageRef],
    );

    return (
        <Box className={`g-map-container ${className || ''}`} sx={{ position: 'relative' }}>
            {sized}
            <Img
                className={'g-map-image'}
                ref={imageRef}
                src={image}
                onClick={logCursorPosition}
                onLoad={handleResize}
                alt={image}
                sx={sx}
            />
            {hotspots.map(({ x, y, element }) => (
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
            ))}
        </Box>
    );
};

export default ImageHotspots;
