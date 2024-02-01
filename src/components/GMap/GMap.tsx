import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGContext } from 'components/GContext';
import useResize from 'components/GMap/useResize.ts';
import useSize from 'hooks/useSize.ts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GMapProps } from './types';

const Img = styled('img')`
    width: 100%;
`;

export default function GMap({ className, image, hotspots, sx, scaleHotspots = true }: GMapProps) {
    const { map } = useGContext();
    const imageRef = useRef<HTMLImageElement>(null);
    const [sized, { width }] = useSize(() => <div />, { width: 100, height: 100 });
    const [origSize, setOrigSize] = useState<{ width: number; height: number } | null>(null);
    const [zoom, setZoom] = useState(1);
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

    useEffect(() => {
        if (!imageRef.current) return;
        const updateOrigSize = () => {
            setOrigSize({ width: imageRef.current!.naturalWidth, height: imageRef.current!.naturalHeight });
        };
        const img = imageRef.current;
        img.onload = updateOrigSize;

        if (img.complete) {
            updateOrigSize();
        }
    }, [image]);

    useEffect(() => {
        if (!origSize) return;
        setZoom(dimensions.width / origSize.width);
    }, [origSize, dimensions]);

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
                        transform: scaleHotspots ? `translate(-50%, -50%) scale(${zoom})` : undefined,
                    }}
                >
                    {element}
                </Box>
            ))}
        </Box>
    );
}
