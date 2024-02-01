import { useGContext } from 'components/GContext';
import GButton from '../GButton';
import { GMapHotspotProps } from './types';

const ButtonHotspot = (props: GMapHotspotProps<'button'>) => {
    const { buttonVariant: defaultBV } = useGContext();
    const { buttonVariant = defaultBV, callback, caption, className, isDisabled, sx } = props;

    return (
        <GButton
            className={`g-map-hotspot-button ${className || ''}`}
            isDisabled={isDisabled}
            onClick={callback}
            sx={sx}
            variant={buttonVariant}
        >
            {caption}
        </GButton>
    );
};

export default ButtonHotspot;
