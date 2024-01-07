import { useGContext } from '../GContext';
import React from 'react';
import { GMapHotspotProps } from './types';
import GButton from '../GButton';

const GMapHotspot = (props: GMapHotspotProps): React.ReactElement<'GMapHotspot', any> => {
    const { buttonVariant: defaultBV } = useGContext();
    const { buttonVariant = defaultBV, callback, caption, className, isDisabled, sx } = props;

    return (
        <GButton
            className={`g-map-hotspot ${className || ''}`}
            isDisabled={isDisabled}
            onClick={callback}
            sx={sx}
            variant={buttonVariant}
        >
            {caption}
        </GButton>
    );
};

export default GMapHotspot;
