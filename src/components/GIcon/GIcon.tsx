import { IconButton, Tooltip } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';
import { useGContext } from '../GContext';
import { IconInterface } from './types';

const GIcon = (props: IconInterface) => {
    const { icon } = useGContext();
    const {
        IconComponent,
        onClick,
        title,
        tooltipPlacement = icon?.tooltipPlacement as TooltipProps['placement'],
        ...otherProps
    } = props;

    return (
        <Tooltip title={title} placement={tooltipPlacement}>
            <IconButton onClick={onClick} {...otherProps}>
                <IconComponent />
            </IconButton>
        </Tooltip>
    );
};

export default GIcon;
