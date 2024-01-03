import { IconButtonOwnProps } from '@mui/material/IconButton/IconButton';
import { TooltipProps } from '@mui/material/Tooltip';
import React from 'react';

export interface IconInterface extends IconButtonOwnProps {
    className?: string;
    title: string;
    tooltipPlacement?: TooltipProps['placement'];
    IconComponent: React.ComponentType<any>;
    children?: undefined;
    onClick?: () => any;
}
