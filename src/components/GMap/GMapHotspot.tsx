import React from 'react';
import { GMapHotspotProps } from './types';
import GButton from '../GButton';

const GMapHotspot = ({
    buttonVariant = 'dark',
    caption,
    callback,
    style = {},
}: GMapHotspotProps): React.ReactElement<'GMapHotspot', any> => (
    <GButton onClick={callback} variant={buttonVariant} style={style}>
        {caption}
    </GButton>
);

export default GMapHotspot;
