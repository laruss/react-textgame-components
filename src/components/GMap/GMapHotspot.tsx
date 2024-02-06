import { Tooltip } from '@mui/material';
import ButtonHotspot from './ButtonHotspot.tsx';
import ImageHotspot from './ImageHotspot.tsx';
import { GMapHotspotProps, GMapHotspotType, HotspotType } from './types';

const GMapHotspot = <T extends HotspotType>(props: GMapHotspotProps<T>): GMapHotspotType => {
    const Component = props.variant === 'image' ? <ImageHotspot {...props} /> : <ButtonHotspot {...props} />;
    const { tooltip } = props;
    const defaultTooltip = {
        title: '',
        show: 'false',
    };

    return (
        <Tooltip {...(tooltip || defaultTooltip)}>
            <div>{Component}</div>
        </Tooltip>
    );
};

export default GMapHotspot;
