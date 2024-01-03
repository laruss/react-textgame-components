import { IconButton, Tooltip } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';
import { useGContext } from '../GContext';
import { IconInterface } from './types';

const GIcon = (props: IconInterface) => {
    const { icon } = useGContext();
    const {
        className,
        IconComponent,
        onClick,
        title,
        tooltipPlacement = icon?.tooltipPlacement as TooltipProps['placement'],
        ...otherProps
    } = props;

    return (
        <Tooltip className='g-icon-tooltip' title={title} placement={tooltipPlacement}>
            <span>
                <IconButton
                    className={`g-icon-button ${className || ''}`}
                    onClick={onClick}
                    {...otherProps}
                >
                    <IconComponent className='g-icon' />
                </IconButton>
            </span>
        </Tooltip>
    );
};

export default GIcon;
