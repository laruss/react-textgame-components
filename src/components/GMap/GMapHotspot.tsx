import ButtonHotspot from './ButtonHotspot.tsx';
import ImageHotspot from './ImageHotspot.tsx';
import { GMapHotspotProps, GMapHotspotType, HotspotType } from './types';

const GMapHotspot = <T extends HotspotType>(props: GMapHotspotProps<T>): GMapHotspotType | null => {
    if (props.variant === 'image') {
        return <ImageHotspot {...props} />;
    } else if (['button', undefined].includes(props.variant)) {
        return <ButtonHotspot {...props} />;
    } else {
        console.error(`Invalid GMapHotspot variant: ${props.variant}`);
        return null;
    }
};

export default GMapHotspot;
