import React, { useRef } from 'react';
import { useSize } from 'react-use';
import useResize from './useResize';
import { ImageHotspotsProps } from './types';

const ImageHotspots = ({ image, hotspots, style = {} }: ImageHotspotsProps) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [sized, { width }] = useSize(() => <div />, { width: 100, height: 100 });
    const { dimensions, handleResize } = useResize({ imageRef, width });

    return (
        <div
            style={{ position: 'relative' }}
            onChange={() => {
                console.log('changed');
            }}
        >
            {sized}
            <img ref={imageRef} src={image} style={{ width: '100%', ...style }} onLoad={handleResize} alt={image} />
            {hotspots.map(({ x, y, element }) => (
                <div
                    key={`${x}-${y}`}
                    style={{
                        position: 'absolute',
                        left: `${(x / 100) * dimensions.width}px`,
                        top: `${(y / 100) * dimensions.height}px`,
                    }}
                >
                    {element}
                </div>
            ))}
        </div>
    );
};

export default ImageHotspots;
