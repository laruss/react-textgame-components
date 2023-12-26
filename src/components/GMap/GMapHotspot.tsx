import { useGContext } from '../GContext';
import React from 'react';
import { GMapHotspotProps } from './types';
import GButton from '../GButton';

const GMapHotspot = (props: GMapHotspotProps): React.ReactElement<'GMapHotspot', any> => {
    const { buttonVariant: defaultBV } = useGContext();
    const { buttonVariant = defaultBV, caption, callback, sx = {} } = props;

    return (
        <GButton onClick={callback} variant={buttonVariant} sx={sx}>
            {caption}
        </GButton>
    );
};

export default GMapHotspot;
