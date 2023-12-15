import { useCallback, useEffect, useState } from 'react';
import { UseResizeProps } from './types';

const useResize = ({ imageRef, width }: UseResizeProps) => {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    const handleResize = useCallback(() => {
        if (imageRef.current) {
            setDimensions({
                width: imageRef.current.offsetWidth,
                height: imageRef.current.offsetHeight,
            });
        }
    }, [imageRef]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    return { dimensions, handleResize };
};

export default useResize;
