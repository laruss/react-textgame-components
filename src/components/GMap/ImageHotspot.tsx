import { styled } from '@mui/material/styles';
import { GMapHotspotProps } from 'components/GMap/types.ts';
import { motion } from 'framer-motion';
import { ReactNode, useCallback, useEffect, useState } from 'react';

const Button = (props: { children: ReactNode }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
        }}
    >
        {props.children}
    </motion.button>
);

const Img = styled('img')`
    width: 100%;
`;

const ImageHotspot = (props: GMapHotspotProps<'image'>) => {
    const { className, isDisabled, callback, sx, active, idle, hover, disabled, alt } = props;
    const [source, setSource] = useState(idle);

    const handleMouseEnter = useCallback(() => {
        if (isDisabled) return;
        hover && setSource(hover);
    }, [hover]);

    const handleMouseLeave = useCallback(() => {
        setSource(idle);
    }, [idle]);

    const handleClick = useCallback(() => {
        if (isDisabled) return;
        active && setSource(active);
        setTimeout(() => {
            setSource(idle);
        }, 500);
        callback();
    }, [active, idle, callback]);

    useEffect(() => {
        if (isDisabled && disabled) {
            setSource(disabled);
        }
    }, [isDisabled, disabled]);

    return (
        <Button>
            <Img
                className={`g-map-hotspot-image ${className || ''}`}
                src={source}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                alt={alt || ''}
                sx={sx}
            />
        </Button>
    );
};

export default ImageHotspot;
