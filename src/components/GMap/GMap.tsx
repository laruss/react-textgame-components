import { GMapProps } from './types';
import ImageHotspots from './ImageHotspots';
import React from 'react';

const GMap = ({ image, hotspots, style = {} }: GMapProps) => (
    <ImageHotspots image={image} hotspots={hotspots} style={style} />
);

export default GMap;
